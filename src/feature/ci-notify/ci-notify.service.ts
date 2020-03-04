import { Injectable } from '@nestjs/common';

@Injectable()
export class CiNotifyService {
  generateBuildErrorMessage(info: BuildInfo){
    const { projectName, commitMessage, commitUserName, commitBranchName} = info;
    const rowList = [
      '\n',
      `'${projectName}' build error !\n`,
      `(${commitBranchName}) ${commitUserName} - ${commitMessage}`,
    ]
    return this.rowListToMessage(rowList);
  }

  generateBuildSuccessMessage(info: BuildInfo){
    const { projectName, commitMessage, commitUserName, commitBranchName} = info;
    const rowList = [
      '\n',
      `'${projectName}' build success !\n`,
      `(${commitBranchName}) ${commitUserName} - ${commitMessage}`,
    ]
    return this.rowListToMessage(rowList);
  }

  rowListToMessage(rowList: string[]) {
    return rowList.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
}

export interface BuildInfo {
  projectName: string;
  commitMessage: string;
  commitUserName: string;
  commitBranchName: string;
}