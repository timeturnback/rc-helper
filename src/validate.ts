export function validateEmail(email: string) {
  if (typeof email !== "string") return false;
  return /\S+@\S+\.\S+/.test(email);
}

export function validateUKPhone(phone: string) {
  if (typeof phone !== "string") return false;
  return /^(\+44|0)7\d{9}$/.test(phone);
}

type CountryCode =
  | "UK"
  | "GB"
  | "US"
  | "CA"
  | "AU"
  | "NZ"
  | "IE"
  | "ZA"
  | "IN"
  | "SG"
  | "MY"
  | "PH"
  | "HK"
  | "MO"
  | "TW"
  | "CN"
  | "JP"
  | "KR"
  | "TH"
  | "VN"
  | "ID"
  | "MM"
  | "PK"
  | "BD"
  | "NP"
  | "LK"
  | "MV"
  | "BT"
  | "BN"
  | "KH"
  | "LA"
  | "TL";
export function validatePhone(phone: string, countryCode: CountryCode) {
  if (typeof phone !== "string") return false;
  if (countryCode === "GB" || countryCode === "UK") {
    return /^(\+44|0)7\d{9}$/.test(phone);
  }
  return false;
}

export function validatePassword(password: string) {
  if (typeof password !== "string") return false;
  // at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/.test(password);
}
