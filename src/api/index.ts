import { useQuery } from 'react-query';
import axios from 'axios';

const getCannedReponses = async () => {
    const endpointURL = 'https://demo-chat-responses-8351-dev.twil.io/chat-responses';
    const { data } = await axios.get(endpointURL);
    return data;
}

export const useResponses = () => {
    return useQuery(
        ['reponses'],
        async () => {
            const data = await getCannedReponses();
            return data;
        }
    );
};