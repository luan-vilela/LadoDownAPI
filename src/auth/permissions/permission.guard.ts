import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import RequestWithUser from '../authentication/requestWithUser.interface';
import Permission from './permission.enum';

const PermissionGuard = (...permission: Permission[]): Type<CanActivate> => {
  class PermissionGuardMixin extends JwtAuthenticationGuard {
    async canActivate(context: ExecutionContext) {
      await super.canActivate(context);

      const request = context.switchToHttp().getRequest<RequestWithUser>();
      const user = request.user;
      // console.log(user);
      // console.log(permission);
      return user.permissions.some((e) => permission.includes(e));
    }
  }

  return mixin(PermissionGuardMixin);
};

export default PermissionGuard;
