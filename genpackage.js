var fs = require("fs");
var path = require("path");

const types = [
    {
        type: "number",
        category: "number",
        displayName: "number",
        shortName: "num",
        promptHint: "myNumber",
        valueShadow: "math_number",
        valueDefault: "0",
    },
    {
        type: "boolean",
        category: "boolean",
        displayName: "boolean",
        shortName: "bool",
        promptHint: "myBool",
        valueShadow: "logic_boolean",
        valueDefault: "false",
    },
    {
        type: "string",
        category: "string",
        displayName: "string",
        shortName: "str",
        promptHint: "myString",
        valueShadow: "text",
        valueDefault: "''",
    },
    {
        type: "Sprite",
        category: "sprite",
        displayName: "sprite",
        shortName: "sprite",
        promptHint: "mySprite",
        valueShadow: "variables_get",
        valueDefault: "mySprite",
    },
    {
        type: "Image",
        category: "image",
        displayName: "image",
        shortName: "image",
        promptHint: "myImage",
        valueShadow: "screen_image_picker",
        valueDefault: "",
    },
    {
        type: "tiles.Location",
        category: "location",
        displayName: "location",
        shortName: "loc",
        promptHint: "myLocation",
        valueShadow: "mapgettile",
        valueDefault: "",
    },
    {
        type: "any",
        category: "any",
        displayName: "any",
        shortName: "any",
        promptHint: "myObject",
        valueShadow: "",
        valueDefault: "",
    }
];

let out = `
//% color="#c74e46"
//% subcategories='[${types.map(t => `"${t.category}"`).join(", ")}]'
namespace blockObject {
    export interface BlockObject {
    }
    //% blockId=blockObject_create
    //% block="create empty object"
    //% weight=100
    export function create(): BlockObject {
        return {};
    }
    //% blockId=blockObject_storeOnSprite
    //% block="store $obj on $sprite"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% sprite.shadow="variables_get" sprite.defl="mySprite"
    //% weight=80
    export function storeOnSprite(obj: BlockObject, sprite: Sprite) {
        if (!sprite.data) sprite.data = {};
        sprite.data["0objectStore"] = obj;
    }
    //% blockId=blockObject_getFromSprite
    //% block="get object stored on $sprite"
    //% sprite.shadow="variables_get" sprite.defl="mySprite"
    //% weight=70
    export function getStoredObject(sprite: Sprite) {
        if (!sprite.data) sprite.data = {};
        return sprite.data["0objectStore"];
    }
}`;
let files = {};

for (const type of types) {
    type.weight = 100;
    out += genCode(type);
    genDocumentation(type);
    if (type.type !== "any") {
        const arr = arrayInfo(type)
        out += genCode(arr);
        genDocumentation(arr);
    }
}


files["api.ts"] = out;

const pxtJSON = `
{
    "name": "blockObject",
    "version": "1.0.0",
    "description": "",
    "dependencies": {
        "device": "*"
    },
    "files": [
        "main.ts",
        "README.md",
        ${Object.keys(files).map(name => `"${name}"`).join(",\n        ")}
    ],
    "testFiles": [
        "test.ts"
    ],
    "targetVersions": {
        "target": "1.0.16",
        "targetId": "arcade"
    },
    "supportedTargets": [
        "arcade"
    ],
    "preferredEditor": "tsprj"
}
`

files["pxt.json"] = pxtJSON;


for (const file of Object.keys(files)) {
    fs.writeFileSync(path.resolve(file), files[file], { encoding: "utf8" });
}


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
}
function arrayInfo(typeInfo) {
    return {
        type: typeInfo.type + "[]",
        category: typeInfo.category,
        displayName: typeInfo.displayName + "Array",
        shortName: typeInfo.shortName + "Array",
        promptHint: typeInfo.promptHint + "Array",
        valueShadow: "lists_create_with",
        valueDefault: (typeInfo.valueShadow && typeInfo.valueShadow !== "variables_get") ? typeInfo.valueShadow : "",
        weight: 0
    }
}

function genCode(typeInfo) {
    return `
namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% subcategory=${typeInfo.category}
    //% blockId=blockObject_${typeInfo.displayName}Prop
    //% kindNamespace=${capitalize(typeInfo.shortName)}Prop
    //% kindPromptHint="e.g. ${typeInfo.promptHint}"
    //% weight=${typeInfo.weight + 1}
    //% help="github:arcade-block-objects/${typeInfo.shortName + ".md"}"
    export function _${typeInfo.shortName}Property(property: number): number {
        return property;
    }
    /**
     * Get a property of type ${typeInfo.type} from an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_${typeInfo.displayName}Prop
    //% subcategory=${typeInfo.category}
    //% block="$obj get ${typeInfo.displayName} $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_${typeInfo.displayName}Prop
    //% weight=${typeInfo.weight + 30}
    //% help="github:arcade-block-objects/${"get" + capitalize(typeInfo.shortName) + ".md"}"
    //% blockGap=8
    export function get${capitalize(typeInfo.displayName)}Property(obj: BlockObject, property: number): ${typeInfo.type} {
        return (obj as any)["0${typeInfo.shortName}" + property] as ${typeInfo.type};
    }

    /**
     * See if an object has a property of type ${typeInfo.type}
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_${typeInfo.displayName}Prop
    //% subcategory=${typeInfo.category}
    //% block="$obj has ${typeInfo.displayName} property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_${typeInfo.displayName}Prop
    //% weight=${typeInfo.weight + 20}
    //% help="github:arcade-block-objects/${"has" + capitalize(typeInfo.shortName) + ".md"}"
    //% blockGap=8
    export function has${capitalize(typeInfo.displayName)}Property(obj: BlockObject, property: number): boolean {
        return (obj as any)["0${typeInfo.shortName}" + property] !== undefined;
    }
    /**
     * Set a property of type ${typeInfo.type} on an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_${typeInfo.displayName}Prop
    //% subcategory=${typeInfo.category}
    //% block="$obj set ${typeInfo.displayName} $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_${typeInfo.displayName}Prop
    //% weight=${typeInfo.weight + 10}
    //% help="github:arcade-block-objects/${"set" + capitalize(typeInfo.shortName) + ".md"}"
    //% blockGap=8
    ${typeInfo.valueShadow ? `//% value.shadow="${typeInfo.valueShadow}"` : ""}
    ${typeInfo.valueDefault ? `//% value.defl="${typeInfo.valueDefault}"` : ""}
    export function set${capitalize(typeInfo.displayName)}Property(obj: BlockObject, property: number, value: ${typeInfo.type}): void {
        (obj as any)["0${typeInfo.shortName}" + property] = value;
    }
}
namespace ${capitalize(typeInfo.shortName)}Prop {
    let nextKind: number;
    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }
    //% isKind
    export const my${capitalize(typeInfo.shortName)} = create();
}
    `
}

function genDocumentation(typeInfo) {
    const propertySnippet = `blockObject._${typeInfo.shortName}Property(${capitalize(typeInfo.shortName)}Prop.my${capitalize(typeInfo.shortName)})`

const getDocs = `# get ${typeInfo.displayName} property

\`\`\`sig
blockObject.get${capitalize(typeInfo.displayName)}Property(blockObject.create(), ${propertySnippet})
\`\`\`

Reads a property of type ${typeInfo.type} that is stored inside a BlockObject using the given ${capitalize(typeInfo.shortName)}Prop.

## Parameters

* **object**: the BlockObject to read the property from
* **property**: the ${capitalize(typeInfo.shortName)}Prop to read

\`\`\`package
arcade-block-objects=github:microsoft/arcade-block-objects
\`\`\`
`

const hasDocs = `# has ${typeInfo.displayName} property

\`\`\`sig
blockObject.has${capitalize(typeInfo.displayName)}Property(blockObject.create(), ${propertySnippet})
\`\`\`

Checks to see if a property of type ${typeInfo.type} is stored inside a BlockObject using the given ${capitalize(typeInfo.shortName)}Prop.

## Parameters

* **object**: the BlockObject to check the property from
* **property**: the ${capitalize(typeInfo.shortName)}Prop to check for existence

\`\`\`package
arcade-block-objects=github:microsoft/arcade-block-objects
\`\`\`
`

const setDocs = `# set ${typeInfo.displayName} property

\`\`\`sig
blockObject.set${capitalize(typeInfo.displayName)}Property(blockObject.create(), ${propertySnippet}, ${typeInfo.valueDefault || null})
\`\`\`

Sets a property of type ${typeInfo.type} on the given BlockObject using the given ${capitalize(typeInfo.shortName)}Prop.

## Parameters

* **object**: the BlockObject to set the property on
* **property**: the ${capitalize(typeInfo.shortName)}Prop to set
* **value**: the value to store for this ${capitalize(typeInfo.shortName)}Prop in the BlockObject

\`\`\`package
arcade-block-objects=github:microsoft/arcade-block-objects
\`\`\`
`

    const propDocs = `
# ${typeInfo.displayName} property

\`\`\`sig
${propertySnippet}
\`\`\`

Represents a key for a value of type ${typeInfo.type} stored on a BlockObject.

\`\`\`package
arcade-block-objects=github:microsoft/arcade-block-objects
\`\`\`
`

    files["get" + capitalize(typeInfo.shortName) + ".md"] = getDocs;
    files["has" + capitalize(typeInfo.shortName) + ".md"] = hasDocs;
    files["set" + capitalize(typeInfo.shortName) + ".md"] = setDocs;
    files[typeInfo.shortName + ".md"] = propDocs;
}