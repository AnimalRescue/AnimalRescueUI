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

import { AdoptionStatus } from './adoptionStatus';
import { AnimalId } from './animalId';
import { AnimalType } from './animalType';
import { Gender } from './gender';
import { KennelId } from './kennelId';
import { LitterId } from './litterId';
import { MedicalHistoryId } from './medicalHistoryId';
import { NoteId } from './noteId';
import { ParNumber } from './parNumber';
import { PhotoId } from './photoId';


export interface AnimalInfo {
    id: AnimalId;
    parNumber: ParNumber;
    name?: string;
    status: AdoptionStatus;
    animalType: AnimalType;
    gender: Gender;
    ageIsEstimated: boolean;
    age?: string;
    dateOfBirth?: string;
    isPartOfLitter: boolean;
    litterId?: LitterId;
    medicalHistoryId?: MedicalHistoryId;
    kennelId?: KennelId;
    bio?: string;
    photos?: PhotoId;
    notes?: Array<NoteId>;
}
