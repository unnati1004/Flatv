import { ADD_FLAT, ADD_FLAT_LOADING, ADD_FLAT_FAILURE, ADD_SINGLE_FLAT, ADD_PAGE_COUNT } from "./action"

const initialstate = {

    flat: [],
    loading: false,
    error: false,
    singleflat: { resident_id: [] },
    pagecount: "",

}

export const reducer = (store = initialstate, { type, payload }) => {

    switch (type) {

        case ADD_FLAT:

            return {
                ...store,
                flat: payload,
                loading: false,
                error: false

            }

        case ADD_FLAT_LOADING:

            return {
                ...store,
                loading: true,
                error: false,


            }

        case ADD_FLAT_FAILURE:

            return {
                ...store,
                loading: false,
                error: true

            }

        case ADD_SINGLE_FLAT:

            return {
                ...store,
                singleflat: payload

            }



        default:
            return store
    }
}