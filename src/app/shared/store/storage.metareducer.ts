function setSavedState(state: any) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}

function clearLocalStorage() {
  localStorage.removeItem(localStorageKey);
}

function getSavedState(): any {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

// the key for the local storage
const localStorageKey = '__mmp_storage__';

export {getSavedState, clearLocalStorage, setSavedState}
