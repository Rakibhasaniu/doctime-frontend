export enum tagTypes {
    doctor = "doctor",
    patient = "patient",
    admin = "admin",
    specialties="specialties",
    schedule="schedule",
    appointment="appointment",
    user="user",
    prescription="prescription",
    review="review",
    doctorSchedule="doctorSchedule"
}

export const tagTypeLists =[
    tagTypes.specialties,tagTypes.admin,tagTypes.doctor,tagTypes.patient,tagTypes.schedule,tagTypes.appointment,tagTypes.user,tagTypes.prescription,tagTypes.review,tagTypes.doctorSchedule
]