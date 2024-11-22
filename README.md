ElectionsStat Elections Web Application
By Miss Samkelisiwe Khuzwayo
For INF4001N Entrance Exam


The ElectionsStat web application is an online-based system intended to provide insights into upcoming, ongoing and previous elections across national, provincial and local levels. Results of- and news regarding the elections are provided to guests upon searching for the website, regardless of being registered voters on the platform or not. The insights guests of the website are provided with include public statements from candidates of the elections, statistics of the performance of candidates over several election years and the real-time distribution of votes amongst candidates.
The aim of providing guests with these insights is to ensure that elections are kept as fair and transparent as possible, as most election protocol should follow. 
While guests of the website are able to view these insights, they cannot cast a vote for a candidate of their choice, unless registered on the platform. This is to maintain election integrity, and to ensure that no votes are casted in a fraudulent manner. Upon registering on ElectionsStat, you will be required to provide information such as your South African Identification Number, your full names, your home address, your cellphone number and your email address. This is to ensure that every registered voter is a citizen of South Africa, thus adhering to election protocols.
A registered user or voter will have a profile created for them, providing them with a personalized experience. They can further access the voting tab, where they can select the candidate of their choice and cast a vote once (depending on the type of elections being held). Once they have voted, the database will indicate if that user has voted or note (when the user has voted, the Boolean value for the ‘hasVoted’ key in the users table will equal ‘TRUE’). They will then be blocked from casting another vote.
ElectionsStat also has a “Frequently Asked Questions” page, which is dedicated to providing users with clarity on how the platform works.
The admin of ElectionsStat is the user with authority to provide information regarding the elections; from the name and the start date of elections to the candidates participating in each election.
The aim of ElectionsStat is to provide all users and guests of the website with recent insights and data on ongoing- and past elections. ElectionsStat emphasizes a clean, user-friendly User Interface in order to attract and retain users.
Although ElectionsStat is an incomplete application, its mission is clear -to provide all those interested in elections with the information they need, and to make lives easier by conducting elections online in a credible manner.

Database used: MySQL

Database Login details:
Database name: my_Electionsweb_app
Password: Makhuzwayo2705*

Setting up the connection in Visual Studio Code (Javascript):
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Makhuzwayo2705*', // MySQL password
    database: 'my_Electionsweb_app' // database name
});

