export const useLocalStorage = (name : string, value : string | null = null) => {
    if ( value == null ) {
        return localStorage.getItem(name)
    }
    localStorage.setItem(name, value)
}