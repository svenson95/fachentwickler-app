export interface BaseResponse {
  success: boolean;
  message: string;
  error: Error | null;
}
