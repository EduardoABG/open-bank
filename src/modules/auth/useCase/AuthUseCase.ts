import IRepository from "../../../repositories/IRepository";
type PayloadLogin = {
  email: string;
  password: string;
};
type PayloadRefreshToken = {
  token: string;
};

export default class AuthUseCase {
  private repository: IRepository;

  constructor(authRepository: IRepository) {
    this.repository = authRepository;
  }

  login(payload: PayloadLogin) {
    const loginData = {
      email: payload.email,
      senha: payload.password,
    };
    const newLogin = this.repository.find({ email: loginData.email });
    return newLogin;
  }

  refreshToken(payload: PayloadRefreshToken) {
    const data = {
      token: payload.token,
    };
    const newToken = this.repository.findById({ token: data.token });
    return newToken;
  }
}
