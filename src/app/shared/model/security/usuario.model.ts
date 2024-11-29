import { Profile } from './Profile.model';
import { UserStatusEnum } from './UserStatusEnum';
import { LoginEnum } from './LoginEnum';

export class Usuario {

  public idUser: number| undefined;
  public idPosition: number| undefined;
  public idUnderdirector: number| undefined;
  public profileList: Profile[]| undefined;
  public positionName: string| undefined;
  public idArea: number| undefined;
  public areaName: string| undefined;
  public idDga: number| undefined;
  public dgaName: string| undefined;
  public username: string| undefined;
  public password: string| undefined;
  public salt: string | undefined;
  public name: string| undefined;
  public firstLastName: string| undefined;
  public secondLastName: string| undefined;
  public phoneNumber: string| undefined;
  public email: string| undefined;
  public territory: string| undefined;
  public underDirectorName: string| undefined;
  public isLawyer: boolean| undefined;
  public isEvaluator: boolean| undefined;
  public isVoboGiven: boolean| undefined;
  public retriesNumber: number| undefined;
  public status: UserStatusEnum | undefined;
  public statusLogin: LoginEnum | undefined;
  public isActiveDirectoryUser: boolean| undefined;
  public isDecider: boolean| undefined;
  public underDirectorPhoneNumber: string| undefined;
  public numberPage: number| undefined;
  public totalRows: number| undefined;
  public idProfile: number| undefined;

  constructor(user_nom: string, password: string) {
    this.username = user_nom;
    this.password = password;
  }

}
