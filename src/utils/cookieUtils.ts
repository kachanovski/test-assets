export function setCookie(
  name: string,
  value: string,
  shouldUseDomain = false,
  domain = "localhost",
  shouldEncode = false
) {
  const valueToUse = shouldEncode
    ? window.btoa(unescape(encodeURIComponent(value ?? "")))
    : value;

  if (shouldUseDomain) {
    document.cookie = `${name}=${valueToUse};path=/; domain=${domain};`;
  } else {
    document.cookie = `${name}=${valueToUse};path=/;`;
  }
}

export function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift();
  }
  return "";
}

export function deleteCookie(
  name: string,
  shouldUseDomain = false,
  domain = "localhost"
) {
  if (shouldUseDomain) {
    document.cookie = `${name}=; domain=${domain};expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  } else {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  }
}
