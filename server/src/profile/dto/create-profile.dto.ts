export class CreateProfileDto {
    constructor(
        public id: string,
        public userName: string,
        public displayName: string,
        public email: string,
        public avatar: string,
        public notifications: string[],
        public messages: string[],
        public courses: string[],
    ) { }
}

