import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const magazineAdapter = createEntityAdapter({
    sortComparer: (a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = magazineAdapter.getInitialState()

export const magazineApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getMagazines: builder.query({
            query: () => ({
                url: '/news',
                validateStatus: ( response, result) => {
                    return response.status === 200 
                },
            }),
            transformResponse: responseData => {
                console.log('Received response:', responseData);
                let data;
                if (Array.isArray(responseData)) {
                    data = responseData;
                } else if (responseData && responseData.error && Array.isArray(responseData.error.data)) {
                    data = responseData.error.data;
                } else {
                    data = [responseData];
                }
                
                // Sort the data by createdAt in descending order (newest first)
                return data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            },
            providesTags: (result, error, arg ) => {
                if (result?.ids){
                    return [
                        { type: 'News' , id: 'LIST'},
                        ...result.ids.map(id => ({ type: 'News', id}))
                    ]
                } else return [{ type: 'News', id: 'LIST'}]
            },
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log('Query fulfilled with data:', data);
                } catch (error) {
                    console.error('Query failed:', error);
                }
            }
        }),
        addNewMagazine: builder.mutation({
            query: initialMagazine => ({
                url: '/news',
                method: 'POST',
                body:{
                    ...initialMagazine
                }
            }),
            invalidatesTags: [
                { type: 'News', id: 'LIST' }
            ]
        }),
        updateMagazine: builder.mutation({
            query: initialMagazine => ({
                url: '/news',
                method: 'PATCH',
                body:{
                    ...initialMagazine,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'News', id: arg.id }
            ]
        }),
        deleteMagazine: builder.mutation({
            query: ({id}) => ({
                url: `/news`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result , error , arg) => [
                { type: 'News', id: arg.id }
            ]
        }),
    }),
})

export const {
    useGetMagazinesQuery,
    useAddNewMagazineMutation,
    useUpdateMagazineMutation,
    useDeleteMagazineMutation,
} = magazineApiSlice

//returns the query result object
export const selectMagazinesResult = magazineApiSlice.endpoints.getMagazines.select()

//creates memoized selector
const selectMagazinesData = createSelector(
    selectMagazinesResult,
    magazinesResult => magazinesResult.data // normalized state object with ids & entities
)



//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllMagazines,
    selectById: selectMagazineById,
    selectIds: selectMagazineIds
    // Pass in a selector that returns the notes slice of state
} = magazineAdapter.getSelectors(state => selectMagazinesData(state) ?? initialState)