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

import { Address } from './address';
import { NoteId } from './noteId';
import { OrganizationId } from './organizationId';
import { PhoneNumber } from './phoneNumber';


export interface Organization {
    id: OrganizationId;
    name: string;
    addressId?: Address;
    phones?: Array<PhoneNumber>;
    notes?: Array<NoteId>;
}
