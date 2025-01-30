// @provengo summon ctrl

/**
 * List of events "of interest" that we want test suites to cover.
 */



// function rankByMetGoals(ensemble) {
//     let validTests = 0;
//
//     // Iterate over all tests in the ensemble
//     for (let test of ensemble) {
//         let goalIndex = 0;
//
//         // Track if the goals are met in the correct order
//         for (let event of test) {
//             if (goalIndex < GOALS.length && event.name === GOALS[goalIndex][0].name) {
//                 goalIndex++;
//             }
//             if (goalIndex === GOALS.length) {
//                 validTests++;  // If we reached all goals in order, count this test
//                 break;
//             }
//         }
//     }
//
//     return validTests;  // Number of valid tests
// }


// Ranking function to return percentage


// const GOALS = [
//     Event("End(addItemToCart)"),
//     Event("End(navToCheckout)"),
//     Event("End(EditDateInput)"),
//     Event("End(checkoutItem)")
// ];
const W_GOALS = [
    Event("End(searchProduct)"),
    Event("End(addItemToCart)"),
    Event("End(navToCheckout)"),
    Event("End(checkoutItem)"),
    Event("End(adminLogin)"),
    Event("End(navToCatalog)"),
    Event("End(navToProducts)"),
    Event("End(navToEditProduct)"),
    Event("End(EditDateInput)")
];


//two way goals
const GOALS = [];
for(var i = 0; i < W_GOALS.length; i++)
{
    for(var j = 0; j < W_GOALS.length; j++) {
        let event1 = W_GOALS[i];
        let event2 = W_GOALS[j];
        GOALS.push([event1, event2]);
    }
}
// const GOALS = [
//     [Event("End(adminLogin)"), Event("End(navToCatalog)")],
//     [Event("End(navToCatalog)"), Event("End(navToProducts)")],
//     [Event("End(navToProducts)"), Event("End(navToEditProduct)")],
//     [Event("End(navToEditProduct)"), Event("End(EditDateInput)")],
//     [Event("End(searchProduct)"), Event("End(addItemToCart)")],
//     [Event("End(addItemToCart)"), Event("End(navToCheckout)")],
//     [Event("End(navToCheckout)"), Event("End(checkoutItem)")],
//     [Event("End(EditDateInput)"), Event("End(searchProduct)")] // Example of interaction between admin and customer
// ];



const makeGoals = function(){
    return [ [ any(/Howdy/), any(/Venus/) ],
        [ any(/Mars/) ],
        [ Ctrl.markEvent("Classic!") ] ];
}

/**
 * Ranks test suites by how many events from the GOALS array were met.
 * The more goals are met, the higher the score.
 *
 * It make no difference if a goal was met more then once.
 *
 * @param {Event[][]} ensemble The test suite to be ranked.
 * @returns Number of events from GOALS that have been met.
 */
// function rankByMetGoals( ensemble ) {
//     const unreachedGoals = [];
//     for ( let idx=0; idx<GOALS.length; idx++ ) {
//         unreachedGoals.push(GOALS[idx]);
//     }
//
//     for (let testIdx = 0; testIdx < ensemble.length; testIdx++) {
//         let test = ensemble[testIdx];
//         for (let eventIdx = 0; eventIdx < test.length; eventIdx++) {
//             let event = test[eventIdx];
//             for (let ugIdx=unreachedGoals.length-1; ugIdx >=0; ugIdx--) {
//                 let unreachedGoal = unreachedGoals[ugIdx];
//                 if ( unreachedGoal.contains(event) ) {
//                     unreachedGoals.splice(ugIdx,1);
//                 }
//             }
//         }
//     }
//
//     return GOALS.length-unreachedGoals.length;
// }

function rankByMetGoals( ensemble ) {
    const unreachedGoals = [];
    // const totalGoals = [];
    for ( let idx=0; idx<GOALS.length; idx++ ) {
        unreachedGoals.push(GOALS[idx]);
        // totalGoals.push([GOALS[idx], GOALS[idx1]]);
        // totalGoals.push([GOALS[idx1], GOALS[idx]]);
    }

    for (let testIdx = 0; testIdx < ensemble.length; testIdx++) {
        let test = ensemble[testIdx];
        for (let eventIdx = 0; eventIdx < test.length; eventIdx++) {
            let event = test[eventIdx];
            // let event1 = test[eventIdx + 1]
            for (let eventIdx1 = 0; eventIdx1 < test.length; eventIdx1++) {
                if (eventIdx === eventIdx1) continue;
                let event1 = test[eventIdx1]

                for (let ugIdx = unreachedGoals.length - 1; ugIdx >= 0; ugIdx--) {
                    let unreachedGoal = unreachedGoals[ugIdx];
                    if (unreachedGoal[0].contains(event) && unreachedGoal[1].contains(event1)) {
                        unreachedGoals.splice(ugIdx, 1);
                    }
                }
            }
        }
    }

    return GOALS.length-unreachedGoals.length;
}
// function rankByMetGoals(ensemble) {
//     // Create a shallow copy of the GOALS array
//     const unreachedGoals = GOALS.slice(); // Use slice() to copy the array instead of the spread operator
//
//     // Iterate through the tests in the ensemble
//     for (let testIdx = 0; testIdx < ensemble.length; testIdx++) {
//         let test = ensemble[testIdx];
//
//         // Iterate through events in the test
//         for (let eventIdx = 0; eventIdx < test.length; eventIdx++) {
//             let event = test[eventIdx];
//
//             // Check pairs of events for matching goals
//             for (let eventIdx1 = 0; eventIdx1 < test.length; eventIdx1++) {
//                 if (eventIdx === eventIdx1) continue; // Skip the same event
//                 let event1 = test[eventIdx1];
//
//                 // Check unreached goals and mark as reached if matched
//                 for (let ugIdx = unreachedGoals.length - 1; ugIdx >= 0; ugIdx--) {
//                     let unreachedGoal = unreachedGoals[ugIdx];
//                     if (unreachedGoal[0].contains(event) && unreachedGoal[1].contains(event1)) {
//                         unreachedGoals.splice(ugIdx, 1); // Remove the reached goal
//                     }
//                 }
//             }
//         }
//     }
//
//     // Return the count of goals that were reached
//     return GOALS.length - unreachedGoals.length;
// }


/**
 * Ranks potential test suites based on the percentage of goals they cover.
 * Goal events are defined in the GOALS array above. An ensemble with rank
 * 100 covers all the goal events.
 *
 * Multiple ranking functions are supported - to change ranking function,
 * use the `ensemble.ranking-function` configuration key, or the
 * --ranking-function <functionName> command-line parameter.
 *
 * @param {Event[][]} ensemble the test suite/ensemble to be ranked
 * @returns the percentage of goals covered by `ensemble`.
 */
function rankingFunction(ensemble) {

    // How many goals did `ensemble` hit?
    const metGoalsCount = rankByMetGoals(ensemble);
    // What percentage of the goals did `ensemble` cover?
    const metGoalsPercent = metGoalsCount/GOALS.length;
    // const metGoalsPercent = (metGoalsCount / ensemble.length) * 100;

    return metGoalsPercent * 100; // convert to human-readable percentage
}

