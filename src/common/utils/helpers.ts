import { AuthGuard } from '@nestjs/passport';


export const JwtAuthGaurd = () => AuthGuard('jwt');
// For Generating the Random OTP
export function getRandomEmailOtp() {
  return  String(Math.floor(Math.random() * 9000000) + 1000000); // Generate 7 digits number,
}

