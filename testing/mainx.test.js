// 2. Create tests based on the code above to check that your tables are created and that you can insert data into them.
// Create the models in the project, per these definitions:
// User
// name string
// email string
// Board
// type string
// description string
// rating number
// Cheese
// title string
// description string
// #Tests
// To run the tests, run
// Copy
// 1
// npm test



// We now need to associate the models with one another according to the specifications provided below.
// Users < - > Boards
// Associate the User and Board models with a One-to-Many relationship
// Multiple Boards can be added to a User.
// Add test(s) to account for the association.
// Boards < - > Cheeses
// Associate the Board and Cheese models with a Many-to-Many relationship.
// A Board can have many Cheeses
// A Cheese can be on many Boards
// Add test(s) to account for the association.
// Eager Loading
// Write another test(s) that verify one or more of these:
// A board can be loaded with its cheeses
// A user can be loaded with its boards
// A cheese can be loaded with its board data



//-----------------------------------------------------------------//

// Find all projects with a least one task where task.state === project.state
// Project.findAll({
//     include: {
//       model: Task,
//       where: {
//         state: Sequelize.col('project.state')
//       }
//     }
//   })

// async function changeUserName(db, userId, username) {
//     const userRepository = db.getRepository(User);
//     const updated = await userRepository.updateUserName(userId, username);
  
//     return updated;
//   }

//   describe('changeUserName', () => {
//     it('should update username in db', async () => {
//       const db = { getRepository: jest.fn() };
//       const repository = { updateUserName: jest.fn() };
  
//       db.getRepository.mockReturnValue(repository);
//       repository.updateUserName.mockReturnValue(Promise.resolve('updated'));
  
//       const result = await changeUserName(db, '1', 'username');
  
//       expect(result).toEqual('updated');
//       expect(repository.updateUserName).toHaveBeenCalledTimes(1);
//       expect(repository.updateUserName).toHaveBeenCalledWith('1', 'username');
//     });
//   });


// // Find all projects with a least one task where task.state === project.state
// Project.findAll({
//   include: {
//     model: Task,
//     where: {
//       state: Sequelize.col('project.state')
//     }
//   }
// })
// @everyone hop in
// Obin — Today at 09:54
// Image
// async function changeUserName(db, userId, username) {
//   const userRepository = db.getRepository(User);
//   const updated = await userRepository.updateUserName(userId, username);

//   return updated;
// }
// describe('changeUserName', () => {
//   it('should update username in db', async () => {
//     const db = { getRepository: jest.fn() };
//     const repository = { updateUserName: jest.fn() };

//     db.getRepository.mockReturnValue(repository);
//     repository.updateUserName.mockReturnValue(Promise.resolve('updated'));

//     const result = await changeUserName(db, '1', 'username');

//     expect(result).toEqual('updated');
//     expect(repository.updateUserName).toHaveBeenCalledTimes(1);
//     expect(repository.updateUserName).toHaveBeenCalledWith('1', 'username');
//   });
// });
 
//  it('deletedRocket contains the deleted rocket', () => {
//       38 |     // destroy returns the deleted instance
//     > 39 |     expect(deletedRocket).toEqual(expect.objectContaining({
//          |                           ^
//       40 |         name: 'High Flyer',
//       41 |         difficultyLevel: 5
//       42 |     }));

//       const firstUpdate = {
//         > 25 |         name: updatedRocket && updatedRocket.name,
//              |               ^
//           26 |         difficultyLevel: updatedRocket && updatedRocket.difficultyLevel
//           27 |     };
//           28 |  

//           25 | it('foundRocket contains the queried rocket', () => {
//             > 26 |     const [foundRocket] = foundRockets;
//                  |                           ^
//               27 |     expect(foundRocket).toEqual(expect.objectContaining(rocket));
//               28 | });