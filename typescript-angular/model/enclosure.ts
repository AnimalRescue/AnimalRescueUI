/**
 * Simple Inventory API
 * This is a simple API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { EnclosureId } from './enclosureId';
import { NoteId } from './noteId';


export interface Enclosure {
    id: EnclosureId;
    size?: number;
    unitOfAreaMeasure?: Enclosure.UnitOfAreaMeasureEnum;
    heightInFeet?: number;
    notes?: Array<NoteId>;
}
export namespace Enclosure {
    export type UnitOfAreaMeasureEnum = 'sq. feet' | 'acres';
    export const UnitOfAreaMeasureEnum = {
        SqFeet: 'sq. feet' as UnitOfAreaMeasureEnum,
        Acres: 'acres' as UnitOfAreaMeasureEnum
    }
}
