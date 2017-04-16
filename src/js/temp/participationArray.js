/**
 * Created by yashw on 31-03-2017.
 */
export default [
    {
        participationId: 1,
        studentId: 0,
        studentName: 'Captain America',
        participationBy: [

            {
                studentId: 4,
                likeOrDisliked: like,
                reasonIds: [234, 43]
            },
            {
                studentId: 1,
                likeOrDisliked: dislike,
                reasonIds: [23434]
            },
            {
                studentId: 5,
                likeOrDisliked: like,
                reasonIds: [232]
            }
        ]

    },

    {
        participationId: 2,
        studentId: 1,
        studentName: 'Hulk',
        participationBy: [

            {
                studentId: 4,
                likeOrDisliked: like,
                reasonIds: [345, 567, 875]
            },
            {
                studentId: 1,
                likeOrDisliked: dislike,
                reasonIds: [3452, 56437, 83475]
            },
            {
                studentId: 5,
                likeOrDisliked: like,
                reasonIds: [3453, 567, 875]
            }
        ]

    }

]