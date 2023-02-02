export interface UserObject{
    createdAt: string,
    orgName: string, 
    userName: string,
    email: string,
    phoneNumber: string,
    lastActiveDate: string,

    profile: ProfileObject,
    guarantor: GuarantorObject,
    socials: SocialsObject,
    education: EducationObject,

    accountBalance: string,
    accountNumber: string,
    id: string,
}

export interface ProfileObject{
    firstName: string,
    lastName: string, 
    phoneNumber: string,
    avatar: string,
    gender: string,
    bvn: string,
    address: string,
    currency: string,
}

export interface GuarantorObject{
    firstName: string,
    lastName: string, 
    phoneNumber: string,
    gender: string,
    address: string,
}

export interface GuarantorObject{
    firstName: string,
    lastName: string, 
    phoneNumber: string,
    gender: string,
    address: string,
}

export interface SocialsObject{
    facebook: string,
    instagram: string, 
    twitter: string,
}

export interface EducationObject{
    level: string,
    employmentStatus: string, 
    sector: string,
    duration: string,
    officeEmail: string,
    loanRepayment: string,
    monthlyIncome: string[]
}