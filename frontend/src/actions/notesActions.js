import axios from 'axios';
import { NOTE_LIST_FAIL, NOTE_LIST_REQUEST, NOTE_LIST_SUCCESS } from '../constants/notesConstants';
import { NOTE_CREATE_FAIL, NOTE_CREATE_REQUEST, NOTE_CREATE_SUCCESS } from '../constants/notesConstants';

export const listNotes = () => async (dispatch, getState) => {

    try {
        dispatch({
            type: NOTE_LIST_REQUEST
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get('/api/notes', config);

        dispatch({
            type: NOTE_LIST_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: NOTE_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};

export const createNoteAction = (title, content, category) => async (dispatch, getState) => {
    
        try {
            dispatch({
                type: NOTE_CREATE_REQUEST
            });
    
            const {
                userLogin: { userInfo },
            } = getState();
    
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
    
            const data = await axios.post('/api/notes/create', { title, content, category }, config);
    
            dispatch({
                type: NOTE_CREATE_SUCCESS,
                payload: data,
            });
    
        } catch (error) {
            dispatch({
                type: NOTE_CREATE_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message
            });
        }
};