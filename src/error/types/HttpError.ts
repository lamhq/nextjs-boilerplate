export default class HttpError extends Error {
  constructor(private readonly response: Response) {
    super(response.statusText);
  }
}
