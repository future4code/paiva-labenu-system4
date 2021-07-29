export type expertise = {
   id: number
   name: ExpertiseType  
}

export enum ExpertiseType {
   React, Redux, CSS, Tests, Typescript, POO, Backend
}

export type hobbies = {
   id: number
   name: string
}

export type class_labenu = {
   id: number
   name: string
   start_date: Date
   end_date: Date
   program?:ProgramNumber 
   type:'full-time'|'night'
}

export enum ProgramNumber {
   zero=0,
   one=1,
   two=2,
   three=3,
   four=4,
   five=5,
   six=6,
   seven=7,
}

export type student = {
   id: number
   name: string
   email:string
   birthdate:Date
   class_id?:Number
}

export type teacher = {
   id: number
   name: string
   email:string
   birthdate:Date
   class_id?:Number
}