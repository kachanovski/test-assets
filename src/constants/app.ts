export enum APP_STATUS {
  ERROR,
  SUCCESS,
  LOADING,
}

export enum TEXT_ERRORS {
  REQUIRED = "Это поле обязательное",
  EMAIL = "Это не email",
  INCORRECT_DATA = "Введенные данные некорректны",
  MIN = "Минимальное количество символов",
  MAX = "Максимальное количество символов",
  FAILED_CHECK_TOKEN = "Данная сылка более не действительна",
  SOME_ERROR = "Что-то пошдл не так",
}
