
//% color="#c74e46"
//% subcategories='["number", "boolean", "string", "sprite", "image", "location", "any"]'
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
}
namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% subcategory=number
    //% blockId=blockObject_numberProp
    //% kindNamespace=NumProp
    //% kindPromptHint="e.g. myNumber"
    //% weight=101
    //% help="github:arcade-block-objects/num.md"
    export function _numProperty(property: number): number {
        return property;
    }
    /**
     * Get a property of type number from an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_numberProp
    //% subcategory=number
    //% block="$obj get number $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_numberProp
    //% weight=130
    //% help="github:arcade-block-objects/getNum.md"
    //% blockGap=8
    export function getNumberProperty(obj: BlockObject, property: number): number {
        return (obj as any)["0num" + property] as number;
    }

    /**
     * See if an object has a property of type number
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_numberProp
    //% subcategory=number
    //% block="$obj has number property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_numberProp
    //% weight=120
    //% help="github:arcade-block-objects/hasNum.md"
    //% blockGap=8
    export function hasNumberProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0num" + property] !== undefined;
    }
    /**
     * Set a property of type number on an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_numberProp
    //% subcategory=number
    //% block="$obj set number $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_numberProp
    //% weight=110
    //% help="github:arcade-block-objects/setNum.md"
    //% blockGap=8
    //% value.shadow="math_number"
    //% value.defl="0"
    export function setNumberProperty(obj: BlockObject, property: number, value: number): void {
        (obj as any)["0num" + property] = value;
    }
}
namespace NumProp {
    let nextKind: number;
    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }
    //% isKind
    export const myNum = create();
}

namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% subcategory=number
    //% blockId=blockObject_numberArrayProp
    //% kindNamespace=NumArrayProp
    //% kindPromptHint="e.g. myNumberArray"
    //% weight=1
    //% help="github:arcade-block-objects/numArray.md"
    export function _numArrayProperty(property: number): number {
        return property;
    }
    /**
     * Get a property of type number[] from an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_numberArrayProp
    //% subcategory=number
    //% block="$obj get numberArray $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_numberArrayProp
    //% weight=30
    //% help="github:arcade-block-objects/getNumArray.md"
    //% blockGap=8
    export function getNumberArrayProperty(obj: BlockObject, property: number): number[] {
        return (obj as any)["0numArray" + property] as number[];
    }

    /**
     * See if an object has a property of type number[]
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_numberArrayProp
    //% subcategory=number
    //% block="$obj has numberArray property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_numberArrayProp
    //% weight=20
    //% help="github:arcade-block-objects/hasNumArray.md"
    //% blockGap=8
    export function hasNumberArrayProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0numArray" + property] !== undefined;
    }
    /**
     * Set a property of type number[] on an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_numberArrayProp
    //% subcategory=number
    //% block="$obj set numberArray $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_numberArrayProp
    //% weight=10
    //% help="github:arcade-block-objects/setNumArray.md"
    //% blockGap=8
    //% value.shadow="lists_create_with"
    //% value.defl="math_number"
    export function setNumberArrayProperty(obj: BlockObject, property: number, value: number[]): void {
        (obj as any)["0numArray" + property] = value;
    }
}
namespace NumArrayProp {
    let nextKind: number;
    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }
    //% isKind
    export const myNumArray = create();
}

namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% subcategory=boolean
    //% blockId=blockObject_booleanProp
    //% kindNamespace=BoolProp
    //% kindPromptHint="e.g. myBool"
    //% weight=101
    //% help="github:arcade-block-objects/bool.md"
    export function _boolProperty(property: number): number {
        return property;
    }
    /**
     * Get a property of type boolean from an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_booleanProp
    //% subcategory=boolean
    //% block="$obj get boolean $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_booleanProp
    //% weight=130
    //% help="github:arcade-block-objects/getBool.md"
    //% blockGap=8
    export function getBooleanProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0bool" + property] as boolean;
    }

    /**
     * See if an object has a property of type boolean
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_booleanProp
    //% subcategory=boolean
    //% block="$obj has boolean property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_booleanProp
    //% weight=120
    //% help="github:arcade-block-objects/hasBool.md"
    //% blockGap=8
    export function hasBooleanProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0bool" + property] !== undefined;
    }
    /**
     * Set a property of type boolean on an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_booleanProp
    //% subcategory=boolean
    //% block="$obj set boolean $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_booleanProp
    //% weight=110
    //% help="github:arcade-block-objects/setBool.md"
    //% blockGap=8
    //% value.shadow="logic_boolean"
    //% value.defl="false"
    export function setBooleanProperty(obj: BlockObject, property: number, value: boolean): void {
        (obj as any)["0bool" + property] = value;
    }
}
namespace BoolProp {
    let nextKind: number;
    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }
    //% isKind
    export const myBool = create();
}

namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% subcategory=boolean
    //% blockId=blockObject_booleanArrayProp
    //% kindNamespace=BoolArrayProp
    //% kindPromptHint="e.g. myBoolArray"
    //% weight=1
    //% help="github:arcade-block-objects/boolArray.md"
    export function _boolArrayProperty(property: number): number {
        return property;
    }
    /**
     * Get a property of type boolean[] from an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_booleanArrayProp
    //% subcategory=boolean
    //% block="$obj get booleanArray $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_booleanArrayProp
    //% weight=30
    //% help="github:arcade-block-objects/getBoolArray.md"
    //% blockGap=8
    export function getBooleanArrayProperty(obj: BlockObject, property: number): boolean[] {
        return (obj as any)["0boolArray" + property] as boolean[];
    }

    /**
     * See if an object has a property of type boolean[]
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_booleanArrayProp
    //% subcategory=boolean
    //% block="$obj has booleanArray property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_booleanArrayProp
    //% weight=20
    //% help="github:arcade-block-objects/hasBoolArray.md"
    //% blockGap=8
    export function hasBooleanArrayProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0boolArray" + property] !== undefined;
    }
    /**
     * Set a property of type boolean[] on an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_booleanArrayProp
    //% subcategory=boolean
    //% block="$obj set booleanArray $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_booleanArrayProp
    //% weight=10
    //% help="github:arcade-block-objects/setBoolArray.md"
    //% blockGap=8
    //% value.shadow="lists_create_with"
    //% value.defl="logic_boolean"
    export function setBooleanArrayProperty(obj: BlockObject, property: number, value: boolean[]): void {
        (obj as any)["0boolArray" + property] = value;
    }
}
namespace BoolArrayProp {
    let nextKind: number;
    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }
    //% isKind
    export const myBoolArray = create();
}

namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% subcategory=string
    //% blockId=blockObject_stringProp
    //% kindNamespace=StrProp
    //% kindPromptHint="e.g. myString"
    //% weight=101
    //% help="github:arcade-block-objects/str.md"
    export function _strProperty(property: number): number {
        return property;
    }
    /**
     * Get a property of type string from an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_stringProp
    //% subcategory=string
    //% block="$obj get string $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_stringProp
    //% weight=130
    //% help="github:arcade-block-objects/getStr.md"
    //% blockGap=8
    export function getStringProperty(obj: BlockObject, property: number): string {
        return (obj as any)["0str" + property] as string;
    }

    /**
     * See if an object has a property of type string
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_stringProp
    //% subcategory=string
    //% block="$obj has string property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_stringProp
    //% weight=120
    //% help="github:arcade-block-objects/hasStr.md"
    //% blockGap=8
    export function hasStringProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0str" + property] !== undefined;
    }
    /**
     * Set a property of type string on an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_stringProp
    //% subcategory=string
    //% block="$obj set string $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_stringProp
    //% weight=110
    //% help="github:arcade-block-objects/setStr.md"
    //% blockGap=8
    //% value.shadow="text"
    //% value.defl="''"
    export function setStringProperty(obj: BlockObject, property: number, value: string): void {
        (obj as any)["0str" + property] = value;
    }
}
namespace StrProp {
    let nextKind: number;
    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }
    //% isKind
    export const myStr = create();
}

namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% subcategory=string
    //% blockId=blockObject_stringArrayProp
    //% kindNamespace=StrArrayProp
    //% kindPromptHint="e.g. myStringArray"
    //% weight=1
    //% help="github:arcade-block-objects/strArray.md"
    export function _strArrayProperty(property: number): number {
        return property;
    }
    /**
     * Get a property of type string[] from an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_stringArrayProp
    //% subcategory=string
    //% block="$obj get stringArray $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_stringArrayProp
    //% weight=30
    //% help="github:arcade-block-objects/getStrArray.md"
    //% blockGap=8
    export function getStringArrayProperty(obj: BlockObject, property: number): string[] {
        return (obj as any)["0strArray" + property] as string[];
    }

    /**
     * See if an object has a property of type string[]
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_stringArrayProp
    //% subcategory=string
    //% block="$obj has stringArray property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_stringArrayProp
    //% weight=20
    //% help="github:arcade-block-objects/hasStrArray.md"
    //% blockGap=8
    export function hasStringArrayProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0strArray" + property] !== undefined;
    }
    /**
     * Set a property of type string[] on an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_stringArrayProp
    //% subcategory=string
    //% block="$obj set stringArray $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_stringArrayProp
    //% weight=10
    //% help="github:arcade-block-objects/setStrArray.md"
    //% blockGap=8
    //% value.shadow="lists_create_with"
    //% value.defl="text"
    export function setStringArrayProperty(obj: BlockObject, property: number, value: string[]): void {
        (obj as any)["0strArray" + property] = value;
    }
}
namespace StrArrayProp {
    let nextKind: number;
    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }
    //% isKind
    export const myStrArray = create();
}

namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% subcategory=sprite
    //% blockId=blockObject_spriteProp
    //% kindNamespace=SpriteProp
    //% kindPromptHint="e.g. mySprite"
    //% weight=101
    //% help="github:arcade-block-objects/sprite.md"
    export function _spriteProperty(property: number): number {
        return property;
    }
    /**
     * Get a property of type Sprite from an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_spriteProp
    //% subcategory=sprite
    //% block="$obj get sprite $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_spriteProp
    //% weight=130
    //% help="github:arcade-block-objects/getSprite.md"
    //% blockGap=8
    export function getSpriteProperty(obj: BlockObject, property: number): Sprite {
        return (obj as any)["0sprite" + property] as Sprite;
    }

    /**
     * See if an object has a property of type Sprite
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_spriteProp
    //% subcategory=sprite
    //% block="$obj has sprite property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_spriteProp
    //% weight=120
    //% help="github:arcade-block-objects/hasSprite.md"
    //% blockGap=8
    export function hasSpriteProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0sprite" + property] !== undefined;
    }
    /**
     * Set a property of type Sprite on an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_spriteProp
    //% subcategory=sprite
    //% block="$obj set sprite $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_spriteProp
    //% weight=110
    //% help="github:arcade-block-objects/setSprite.md"
    //% blockGap=8
    //% value.shadow="variables_get"
    //% value.defl="mySprite"
    export function setSpriteProperty(obj: BlockObject, property: number, value: Sprite): void {
        (obj as any)["0sprite" + property] = value;
    }
}
namespace SpriteProp {
    let nextKind: number;
    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }
    //% isKind
    export const mySprite = create();
}

namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% subcategory=sprite
    //% blockId=blockObject_spriteArrayProp
    //% kindNamespace=SpriteArrayProp
    //% kindPromptHint="e.g. mySpriteArray"
    //% weight=1
    //% help="github:arcade-block-objects/spriteArray.md"
    export function _spriteArrayProperty(property: number): number {
        return property;
    }
    /**
     * Get a property of type Sprite[] from an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_spriteArrayProp
    //% subcategory=sprite
    //% block="$obj get spriteArray $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_spriteArrayProp
    //% weight=30
    //% help="github:arcade-block-objects/getSpriteArray.md"
    //% blockGap=8
    export function getSpriteArrayProperty(obj: BlockObject, property: number): Sprite[] {
        return (obj as any)["0spriteArray" + property] as Sprite[];
    }

    /**
     * See if an object has a property of type Sprite[]
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_spriteArrayProp
    //% subcategory=sprite
    //% block="$obj has spriteArray property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_spriteArrayProp
    //% weight=20
    //% help="github:arcade-block-objects/hasSpriteArray.md"
    //% blockGap=8
    export function hasSpriteArrayProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0spriteArray" + property] !== undefined;
    }
    /**
     * Set a property of type Sprite[] on an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_spriteArrayProp
    //% subcategory=sprite
    //% block="$obj set spriteArray $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_spriteArrayProp
    //% weight=10
    //% help="github:arcade-block-objects/setSpriteArray.md"
    //% blockGap=8
    //% value.shadow="lists_create_with"

    export function setSpriteArrayProperty(obj: BlockObject, property: number, value: Sprite[]): void {
        (obj as any)["0spriteArray" + property] = value;
    }
}
namespace SpriteArrayProp {
    let nextKind: number;
    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }
    //% isKind
    export const mySpriteArray = create();
}

namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% subcategory=image
    //% blockId=blockObject_imageProp
    //% kindNamespace=ImageProp
    //% kindPromptHint="e.g. myImage"
    //% weight=101
    //% help="github:arcade-block-objects/image.md"
    export function _imageProperty(property: number): number {
        return property;
    }
    /**
     * Get a property of type Image from an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_imageProp
    //% subcategory=image
    //% block="$obj get image $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_imageProp
    //% weight=130
    //% help="github:arcade-block-objects/getImage.md"
    //% blockGap=8
    export function getImageProperty(obj: BlockObject, property: number): Image {
        return (obj as any)["0image" + property] as Image;
    }

    /**
     * See if an object has a property of type Image
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_imageProp
    //% subcategory=image
    //% block="$obj has image property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_imageProp
    //% weight=120
    //% help="github:arcade-block-objects/hasImage.md"
    //% blockGap=8
    export function hasImageProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0image" + property] !== undefined;
    }
    /**
     * Set a property of type Image on an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_imageProp
    //% subcategory=image
    //% block="$obj set image $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_imageProp
    //% weight=110
    //% help="github:arcade-block-objects/setImage.md"
    //% blockGap=8
    //% value.shadow="screen_image_picker"

    export function setImageProperty(obj: BlockObject, property: number, value: Image): void {
        (obj as any)["0image" + property] = value;
    }
}
namespace ImageProp {
    let nextKind: number;
    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }
    //% isKind
    export const myImage = create();
}

namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% subcategory=image
    //% blockId=blockObject_imageArrayProp
    //% kindNamespace=ImageArrayProp
    //% kindPromptHint="e.g. myImageArray"
    //% weight=1
    //% help="github:arcade-block-objects/imageArray.md"
    export function _imageArrayProperty(property: number): number {
        return property;
    }
    /**
     * Get a property of type Image[] from an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_imageArrayProp
    //% subcategory=image
    //% block="$obj get imageArray $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_imageArrayProp
    //% weight=30
    //% help="github:arcade-block-objects/getImageArray.md"
    //% blockGap=8
    export function getImageArrayProperty(obj: BlockObject, property: number): Image[] {
        return (obj as any)["0imageArray" + property] as Image[];
    }

    /**
     * See if an object has a property of type Image[]
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_imageArrayProp
    //% subcategory=image
    //% block="$obj has imageArray property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_imageArrayProp
    //% weight=20
    //% help="github:arcade-block-objects/hasImageArray.md"
    //% blockGap=8
    export function hasImageArrayProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0imageArray" + property] !== undefined;
    }
    /**
     * Set a property of type Image[] on an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_imageArrayProp
    //% subcategory=image
    //% block="$obj set imageArray $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_imageArrayProp
    //% weight=10
    //% help="github:arcade-block-objects/setImageArray.md"
    //% blockGap=8
    //% value.shadow="lists_create_with"
    //% value.defl="screen_image_picker"
    export function setImageArrayProperty(obj: BlockObject, property: number, value: Image[]): void {
        (obj as any)["0imageArray" + property] = value;
    }
}
namespace ImageArrayProp {
    let nextKind: number;
    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }
    //% isKind
    export const myImageArray = create();
}

namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% subcategory=location
    //% blockId=blockObject_locationProp
    //% kindNamespace=LocProp
    //% kindPromptHint="e.g. myLocation"
    //% weight=101
    //% help="github:arcade-block-objects/loc.md"
    export function _locProperty(property: number): number {
        return property;
    }
    /**
     * Get a property of type tiles.Location from an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_locationProp
    //% subcategory=location
    //% block="$obj get location $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_locationProp
    //% weight=130
    //% help="github:arcade-block-objects/getLoc.md"
    //% blockGap=8
    export function getLocationProperty(obj: BlockObject, property: number): tiles.Location {
        return (obj as any)["0loc" + property] as tiles.Location;
    }

    /**
     * See if an object has a property of type tiles.Location
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_locationProp
    //% subcategory=location
    //% block="$obj has location property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_locationProp
    //% weight=120
    //% help="github:arcade-block-objects/hasLoc.md"
    //% blockGap=8
    export function hasLocationProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0loc" + property] !== undefined;
    }
    /**
     * Set a property of type tiles.Location on an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_locationProp
    //% subcategory=location
    //% block="$obj set location $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_locationProp
    //% weight=110
    //% help="github:arcade-block-objects/setLoc.md"
    //% blockGap=8
    //% value.shadow="mapgettile"

    export function setLocationProperty(obj: BlockObject, property: number, value: tiles.Location): void {
        (obj as any)["0loc" + property] = value;
    }
}
namespace LocProp {
    let nextKind: number;
    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }
    //% isKind
    export const myLoc = create();
}

namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% subcategory=location
    //% blockId=blockObject_locationArrayProp
    //% kindNamespace=LocArrayProp
    //% kindPromptHint="e.g. myLocationArray"
    //% weight=1
    //% help="github:arcade-block-objects/locArray.md"
    export function _locArrayProperty(property: number): number {
        return property;
    }
    /**
     * Get a property of type tiles.Location[] from an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_locationArrayProp
    //% subcategory=location
    //% block="$obj get locationArray $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_locationArrayProp
    //% weight=30
    //% help="github:arcade-block-objects/getLocArray.md"
    //% blockGap=8
    export function getLocationArrayProperty(obj: BlockObject, property: number): tiles.Location[] {
        return (obj as any)["0locArray" + property] as tiles.Location[];
    }

    /**
     * See if an object has a property of type tiles.Location[]
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_locationArrayProp
    //% subcategory=location
    //% block="$obj has locationArray property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_locationArrayProp
    //% weight=20
    //% help="github:arcade-block-objects/hasLocArray.md"
    //% blockGap=8
    export function hasLocationArrayProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0locArray" + property] !== undefined;
    }
    /**
     * Set a property of type tiles.Location[] on an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_locationArrayProp
    //% subcategory=location
    //% block="$obj set locationArray $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_locationArrayProp
    //% weight=10
    //% help="github:arcade-block-objects/setLocArray.md"
    //% blockGap=8
    //% value.shadow="lists_create_with"
    //% value.defl="mapgettile"
    export function setLocationArrayProperty(obj: BlockObject, property: number, value: tiles.Location[]): void {
        (obj as any)["0locArray" + property] = value;
    }
}
namespace LocArrayProp {
    let nextKind: number;
    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }
    //% isKind
    export const myLocArray = create();
}

namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% subcategory=any
    //% blockId=blockObject_anyProp
    //% kindNamespace=AnyProp
    //% kindPromptHint="e.g. myObject"
    //% weight=101
    //% help="github:arcade-block-objects/any.md"
    export function _anyProperty(property: number): number {
        return property;
    }
    /**
     * Get a property of type any from an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_anyProp
    //% subcategory=any
    //% block="$obj get any $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_anyProp
    //% weight=130
    //% help="github:arcade-block-objects/getAny.md"
    //% blockGap=8
    export function getAnyProperty(obj: BlockObject, property: number): any {
        return (obj as any)["0any" + property] as any;
    }

    /**
     * See if an object has a property of type any
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_anyProp
    //% subcategory=any
    //% block="$obj has any property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_anyProp
    //% weight=120
    //% help="github:arcade-block-objects/hasAny.md"
    //% blockGap=8
    export function hasAnyProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0any" + property] !== undefined;
    }
    /**
     * Set a property of type any on an object
     *
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_anyProp
    //% subcategory=any
    //% block="$obj set any $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_anyProp
    //% weight=110
    //% help="github:arcade-block-objects/setAny.md"
    //% blockGap=8


    export function setAnyProperty(obj: BlockObject, property: number, value: any): void {
        (obj as any)["0any" + property] = value;
    }
}
namespace AnyProp {
    let nextKind: number;
    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }
    //% isKind
    export const myAny = create();
}
