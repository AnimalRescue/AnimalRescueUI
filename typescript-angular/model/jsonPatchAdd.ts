/**
 * Animal Rescue API
 * AnimalRescue CQRS API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: jlgartee@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { JsonPointer } from './jsonPointer';


/**
 * add operation. Value can be any JSON value.
 */
export interface JsonPatchAdd {
    op: JsonPatchAdd.OpEnum;
    path: JsonPointer;
}
export namespace JsonPatchAdd {
    export type OpEnum = 'add';
    export const OpEnum = {
        Add: 'add' as OpEnum
    }
}
