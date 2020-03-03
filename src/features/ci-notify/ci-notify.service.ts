import { Injectable } from '@nestjs/common';

@Injectable()
export class CiNotifyService {
  generateBuildErrorMessage(info: BuildErrorInfo){
    const { projectName, commitMessage, commitUserName, commitBranchName} = info;
    const rowList = [
      '\n',
      `'${projectName}' build error !\n`,
      `(${commitBranchName}) ${commitUserName} - ${commitMessage}`,
    ]
    return rowList.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
}

export interface BuildErrorInfo {
  projectName: string;
  commitMessage: string;
  commitUserName: string;
  commitBranchName: string;
}