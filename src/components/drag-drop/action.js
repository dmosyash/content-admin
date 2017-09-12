export const UPDATE_FILES_DATA = 'UPDATE_FILES_DATA';

export function updateData(data, callback) {
    return {
        type: UPDATE_FILES_DATA,
        payload: data,
        callback: callback
    };
}