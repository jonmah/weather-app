## Notes
- Server portion generated with Express
- Client bootstrapped with create-react-app

### Date
2021-03-13

### Location and deployed application
Did not deploy

### Time spent
On and off ~6 hours  across 3 days

### Assumptions made
- The general idea was to keep the time spent on this assignment 4-6 hours per the email received when given the assignment.
- I kept "Vancouver, BC" as the default initial forecast lookup as that was the original requirement of the assignment.
- Imperial and metric will suffice as units for the purpose of this assignment.
- API key for OpenWeather would need to be kept secret (as should any API key), hence the need for Express so that it isn't exposed in the front end.
- The forecast data comes back in 3 hour intervals per day which. My general approach to aggregate most of the data was to reduce on the basis of most common occurrence (Example: 5 instances of rain vs 3 instances of cloud, meant that I would use rain to represent the day. I did not account for ties for simplicity but if I were to I'd imagine there would be some sort of weighted value on weather conditions where "snow" for example would trump "cloudy" as it gives a more detailed representation of the day.). For temperature I just took the highest and the lowest values to use.
- I chose to have a lookup attempt on each individual location selection (country, state, city). For most cases, it made sense to do the lookup only when all 3 parts are selected because the lookup would be precisely where a user would want to get the weather forecast. However, due to the dataset I am using, certain countries wouldn't have states/cities. "American Samoa" is one such example where I wouldn't get any states but the API can retrieve results for the country alone.
- I assumed a general set of breakpoints. While I do demonstrate their usage, not all were necessary but they are good to keep if the application were to expand.
- I assumed that no localization was required for the purpose of the assignment.

### Shortcuts/Compromises made
- The location selector would have been more robust if I were to have integrated with something like Google's search address API. However, it did not make sense for me to generate a Google API key for the purposes of demonstrating that. For that reason, I went with a more tedious method of having the user select each location portion (country, state, city). While not as great, it seemed better than dealing with the frustrations of human typing errors.
- I kept the forecast data being used to a minimum. One reason was that I felt it adequately demonstrated my ability to transform data to my heart's desire. The other reason was to be cognizant of time constraints working on this assignment.
- Most bootstrapped code/artifacts were kept in the interest of time. - In some cases, we get more than 5 days of forecasts due to the nature of the API returning data in 3 hour intervals. I have chosen to not make the determination of trimming to exactly 5 days as it does not break the application and just having slightly more data presented doesn't seem to do much harm in my opinion.

### Stretch goals attempted
- Create a responsive version. If time were less of a factor, I would have wanted to tailor the layout to have more distinct views in different breakpoints. It does, otherwise, reasonably handle screen sizes.
- Add a feature to explore the weather information in other cities (see discussion on this from previous sections).

### Instructions to run assignment locally
- For each `server/` and `client/` run `yarn install`
- In `server/` run `PORT=3001 bin/www`
- In `client/` run `yarn start`
- View application at `localhost:3000`

### What did you not include in your solution that you want us to know about
- Unit tests. I left them out in the interest of time.
- Indicators for location selection. The state and city fields are disabled by default because they are dependent on previous selections to filter the data that is shown (Ex. Only cities in British Columbia should be shown when "British Columbia" is selected). An intuitive and aesthetically pleasing way to direct the user on which fields to select in sequence would've been nice to have.
- Employing a weight system on weather patterns for better forecast representations on any given day (as mentioned in previous sections).
- While I kept "Vancouver, BC" as the default initial forecast lookup, it would have been more intuitive to attempt to get the user's location so the default would be to show their local weather forecast instead.
- I did not spend time to tailor static assets (size, responsiveness, etc) for better performance.

### Other information about your submission that you feel is important that we know if applicable
- Worth noting that the use of `styled-components` allowed me to lay the foundations for theme support if the application were to continue growing


### Your feedback on this technical challenge
- I felt as if the direction to not over-engineer the solution in conjunction with the ambiguity of requirements was a difficult combination to balance.