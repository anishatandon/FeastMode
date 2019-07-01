export const signUp = data => async (
    dispatch,
    getState,
    { getFirebase, getFirestore }
) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    try {
        const res = await firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.passwordOne)

        console.log(res.user.uid)

        await firestore.collection('users').doc(res.user.uid).set({ 
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone
        })
    } catch(err) {}
}