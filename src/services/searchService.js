import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('api/users/search', {
            params: {
                q,
                type: 'less',
            },
        });
        return res.data;
    } catch (error) {
        console.log('Error');
    }
};
