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

import { AnimalId } from './animalId';
import { BuildingId } from './buildingId';
import { IntakeId } from './intakeId';
import { KennelId } from './kennelId';
import { LocationId } from './locationId';
import { ParNumber } from './parNumber';
import { RoomId } from './roomId';


/**
 * Item of IntakeList
 */
export interface IntakeListItem {
    id?: IntakeId;
    parNumber?: ParNumber;
    dateOfIntake?: string;
    animalId?: AnimalId;
    animalName?: string;
    isInIsolation?: boolean;
    adoptionStatus?: string;
    kennelName?: string;
    kennelId?: KennelId;
    roomName?: string;
    roomId?: RoomId;
    buildingName?: string;
    buildingId?: BuildingId;
    locationName?: string;
    locationId?: LocationId;
}
