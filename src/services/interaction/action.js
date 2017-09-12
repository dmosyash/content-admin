export const SELECT_INTERACTION = 'SELECT_INTERACTION';

export function selectInteraction(data) {
    return {
        type: SELECT_INTERACTION,
        payload: data
    };
}