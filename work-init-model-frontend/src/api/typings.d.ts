// ./src/api/typings.d.ts: 临时类型, 如果导入接口文档最好去除

declare namespace API {
  type LoginUserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };
}
