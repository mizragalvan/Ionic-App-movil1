import { RecordStatusEnum } from "./RecordStatusEnum";

export class Profile {
    public idProfile: number | undefined;
    public name: string | undefined;
    public status: RecordStatusEnum | undefined;
    public numberPage: number | undefined;
    public totalRows: number | undefined;
}