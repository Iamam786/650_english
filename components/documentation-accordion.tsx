"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText, Handshake, Code, Shield, Zap, BookOpen } from "lucide-react"
import React, { useEffect, useState } from "react"

const documentationSections = [
	{
		title: "Greeting Someone",
		icon: Handshake,
		content: `Greeting someone is what you do when you first see them… basically saying ‘Hello’. 
		There are many different ways people greet each other in English. Some being formal or appropriate for every situation and others being informal and something you should say only to close friends or family.
	In the United States, the most common way to greet someone with words. In formal situations or when you meet someone for the first time you shake hands. Some people wave at one another. In informal situations with people you know (family or good friends) you may hug or kiss one another.
	Formal Greetings
	Hello
	Hello _________! (Insert name of person)
	How are you?
	How are you doing?
	How have you been?
	Good Morning!
	Good Afternoon!
	Good Evening!
	Informal Greetings
	Hi!
	Hey!
	What’s up?
	How’s it going?
	What’s new?
	What have you been up to?
	How are you?`,
	},
	{
		title: "Saying Good-Bye",
		icon: Handshake,
		content: `How you say good-bye in English depends on who you are talking to. There are formal, informal and VERY informal ways to say good-bye.
	Similar to greetings, some people shake hands, wave, hug and kiss but this varies from situation to situation. It is best to follow what other people are doing or to do what makes you comfortable.
	<strong>Formal</strong>
	Good-Bye
	Have a nice day!
	It was nice seeing you again.
	I look forward to seeing you again.
	Take care.
	Good night!
	<strong>Informal</strong>
	Bye
	Bye-Bye
	See you later! Or- See you soon!
	Talk to you later.
	Take it easy.
	I’ve got to get going.
	I’ve got to run.
	Really Informal
	Check you later.
	I’m out. Or- I’m out of here.
	I’m off.
	I’ve gotta take off.
	See ya.
	Pace`,
	},
	{
		title: "Introductions",
		icon: Zap,
		content: `When you meet someone for the first time you need to introduce yourself, which means telling them who you are.
	When you are introducing yourself or someone else you can also share a little more information. For example… 
	your job title, 
	how you know the host, or something else about yourself.
	Introducing Yourself
	Hello, I’m ___________.
	I am ____________.
	Hey, I’m _____.
	Introducing Someone Else (Formal)
	This is ______. He/She is my co-worker.
	This is ___________. He/She is _______________.
	I’d like to introduce you to _______, the _______at ________.
	I would like you to meet ________.
	Introducing Someone Else (Informal)
	This is ___________.
	This is my friend _______.
	Examples Introductions
	- Hi! I’m Elizabeth, Eric’s cousin.
	- Hey, I’m Betsy. I’m the new project manager.
	- This is Carl. He is our new IT manager.
	- This is my girlfriend Paula.
	- I’d like to introduce you to Abdul, the Frontend Developer at ClickinPedia.
	- I’d like you to meet Anna. She has been a friend of mine for ten years.
	`,
	},
	{
		title: "Talking about Likes",
		icon: Zap,
		content: `There are various ways to express liking or enjoying something in English.
	I like…
	I enjoy…
	My favorite _________ is…
	If you really like something and want to emphasize how much you like it, you could use one of the phrases below.
	I love…
	I really like/love…
	I adore…
	<b>Example Sentences</b>
	- I like pizza.
	- I like to read books by Dr. Seuss.
	- Peter enjoys running in the snow.
	- I enjoy this peace and quiet.
	- I love eating sushi. It is so delicious.
	- I love learning new things.
	- Bob really loves the new morning program on NBC.
	- I really like taking long walks in on the beach.
	- I adore Maria. She is such a nice girl.
	- My favorite movie is Top Gun. It is full of action.
	- My favorite season is summer because I love the warm weather.`,
	},
	{
		title: "Talking about Dislikes",
		icon: Zap,
		content: `There are many ways to talk about things you don’t likes. Below you will find some sentence starters and example sentences.
	I don’t like…
	I don’t enjoy…
	I dislike…*
	I hate…
	My least favorite ________ is…
	<b>Example Sentences</b>
	I don’t like fish.
	I don’t like to pick up after my kids.
	I don’t enjoy eating spicy food.
	I don’t enjoy talking to my boss.
	I dislike this song.*
	I hate bugs.
	I hate crying babies. They give me a headache.
	My least favorite food is spinach.
	My least favorite season is winter.
	* Dislike is not very commonly used in American English. You can use it and it is correct but not used as often as ‘don’t like’ or ‘hate’.
	What do you do? /Jobs
	What do you do,is a common question. 
	It is what you ask someone when you want to know what they work in or how they spend their time. It is impolite and not common to directly ask someone, “What is your job?” in English. When someone asks you “What do you do?” they mean…
	What do you work in?
	What do you do for a living?
	How do you spend most of your time?
	Possible Ways to Answer
	I’m a …
	I am…
	I work as a…
	<b>Example Sentences</b>
	I’m a teacher.
	I’m a full time student.
	I’m a stay at home mom.
	I work as an engineer.
	I am in between jobs right now.
	I am a retired nurse.
	I’m a college student and work part-time as a bartender.
	I work in a paper factory.
	I work in sales for a large telecommunications company.
	<b>Additional Resources:</b>
	1- Different examples of how you can respond to ‘What do you do?’
	What Are You Doing Right Now?
	In the United States, it is common to ask someone ‘What are you doing?’. 
	If someone asks you this, they want to know what you are doing in this exact moment.
	I am + verb +ing
	<b>Example Sentences:</b>
	I am reading a book.
	I am practicing English.
	I am talking on the phone.
	I am learning to speak English.
	I am writing a note.
	I am cooking dinner
	I am cleaning the kitchen.
	I am washing clothes.
	I am driving to work.
	I am at work.
	I am making an appointment.
	I am paying bills online.
	I am chatting with my friends on Skype.
	If you aren’t don’t anything really interesting you could respond by saying:
	Nothing
	Nothing much
	Not much
	Additional Resources:
	Song about ‘What are you doing?
	to help practice present continuous.
	`,
	},
	{
		title: "Talking about the Past",
		icon: Zap,
		content: `It is very common to talk about things that already happened. If something already happened or is finished it is in the past. Below you will find some sentence starters and example sentences to help you talk about things you have done in the past.
	Most Common Verbs Used to Talk about the Past
	I went…
	I ate…
	I was…
	I read…
	I played…
	I saw…
	I talked to…
	I worked…
	<b>Example Sentences</b>
	I went to work.
	I ate spaghetti for lunch.
	I read two books over the weekend.
	I saw a movie.
	I talked to my friend.
	List of Common ‘Times’ in the Past
	Yesterday…
	Two days ago…
	Seven years ago…
	An hour ago…
	A little bit ago…
	Last week…
	Last month…
	Last year…
	When I was a kid…
	When I was growing up…
	Talking about the Future
	Talking about something that you will do or want to do in the future is very common. Below you will learn some phrases to help you talk about the future or something that hasn’t happened yet.
	The two most common phrases used to talk about the future are:
	I will…
	I am going to…
	List of Common ‘Times’ in the Future
	Tomorrow…
	Next week…
	Next month…
	Next year…
	In a few weeks…
	In a few years…
	When I retire…
	<b>Example Sentences</b>
	I will go on vacation in June.
	I will meet with my friends on Friday.
	I will go shopping next week.
	Tomorrow I am going swimming.
	Next year I am moving to Boston.
	I am going to get married in a few years.
	When I retire I am going to travel a lot.
<b>Additional Resources:</b>
	1- Video talking about ‘Will and Going to’
	2- 10 Expressions to use when talking about the future
	3- Another Video on ‘Will and be going to’
	4- What are you going to do this weekend? Video`,
	},
	{
		title: " Routines",
		icon: Zap,
		content: `A routine is something you do every day or often. Below you will learn different phrases to help you explain your routines.
	List of some things you do every day or often:
	Wake up, go to sleep, brush your teeth, take a shower, use the internet, cook, clean, drive, talk to your husband or wife, study, read, etc.
	I ____________ every day.
	On _________ and ___________, I _____________.
	Every _________, I ___________.
	I ___________ three times a week.
	<b>Example Sentences</b>
	I wake up at 7am.
	I work out four days a week.
	I play baseball every Sunday.
	I go to work every day.
	I go to school five days a week.
	I brush my teeth every day.
	I drink coffee every morning.
	On Tuesdays and Thursdays, I go to English class.
	I take a shower every night.
	I eat three times a day.
	I go to Italy every summer.
<b>Additional Resources:</b>
	1- Video about activities your do every day
	2- Vocabulary often used when talking about daily routines
	3- Song about routines in English
	4- Another song about daily routines`,
	},
	{
		title: "Hobbies & Free Time:-",
		icon: Zap,
		content: `A hobby is something that you do in your free time. It is something that you enjoy doing and do often.
	Free time is a time when you don’t have to work or don’t have any other obligations.
	In American English it is not common to use the word hobby. 
	It is more common to ask say:
	What do you like to do for fun?
	What do you like to do in your free time?
	Common ways to respond to these questions are:
	In my free time, I…
	I like ___________ in my free time.
	I ___________ every week.
	I am learning to…
	When I’m not working, I like to…
	<b>Example Sentences</b>
	In my free time, I like to work out at the gym.
	I like to spend time with my family and friends in my free time.
	I am learning to play the guitar.
	When I’m not working, I like to run and play soccer.
	I like to read novels in my free time.
	I go to a cooking class every week.
	I am learning to knit. I not very good at it yet but I am getting better.
	<b>Additional Resources:</b>
	Video: What do you do for fun?
	Video: 3 min. English- Ask what someone’s hobbies are.
	Video: Talking about hobbies and free time`,
	},
	{
		title: "Family",
		icon: Zap,
		content: `Everyone’s family is different. Below you will find some phrases to help you talk about your family.
	Phrases To Talk about Your Family:
	There are ____ people in my family.
	I live with my ___________ and ____________.
	I have _______ brothers and sisters.
	I have ______ children.
	I have a small/large family.
	I live close to my family.
	I live far away from my family.
	Questions you can ask someone about their family?
	How many children do you have?
	Do you have a large (or small) family?
	Do you live near your extended family?
	Did you grow up here?
	How many siblings do you have?
	<b>Example Sentences</b>
	1-Basic Family Vocabulary
	2- Video- Talking about your family
	3-Video- Talking about your family (intermediate)
	`,
	},
	{
		title: "Relationships",
		icon: Zap,
		content: `Talking about someone’s personal relationships can be a touchy (or sensitive) subject. Don’t talk to someone about their relationships until you get to know them a little more.
	Common Vocabulary Used When Talking about Relationships:
	Single: alone, not in a relationship
	Married: in a committed relationship
	Divorced: formally married, now alone
	In a relationship: in a relationship, but may not be that serious
	Platonic relationship: just friends, no sexual
	Friends: Someone you like to spend time with
	Friends with benefits: people who have sex together but are not in a relationship
	Hook up: someone you have sex with once, but not in a relationship
	Make out: kiss a lot
	Break up: end a relationship
	<b>Example Sentences</b>
	1- After a horrible break up and divorce, I am happy to be single again.
	2- We have been happily married for 10 years.
	3- My brother is not in a relationship. He likes to hook up with random girls.
	Questions to ask someone about their relationship:
	Are you single?
	How long have you been married (together)?
	When did you get divorced?
	Have you been friends for a long time?
	How did you meet each other?
	<b>Example Sentences</b>
	1- Video Lesson: Love, Dating and Relationships
	2- Expressions about Love and Relationships
	3- Video: Phrases for Describing Relationships
	`,
	},
	{
		title: "Personal Characteristics",
		icon: Zap,
		content: `There are many ways to describe someone. Below you will learn some of the most basic ways todescribe someone.
	There are many links in the resources section to help you expand you vocabulary and understanding of this topic.
	I am… He/She is….
	tall/short
	fat*/skinny/average
	beautiful/pretty (used for describing women)
	handsome/good-looking (used for describing men)
	*It is not considered polite to call people fat, even if they are. It is customary to avoid this topic or say ‘overweight’ instead of fat or obese.
	Common Characteristics to describe someone’s personality:
	Talkative (talks a lot)
	Hard-worker (enjoys working a lot)
	Athletic (enjoys sports)
	Smart/intelligent Funny (enjoy jokes, good sense of humor)
	Easy-going (goes with the flow, enjoys most things)
	Lazy (does not do a lot)
	Mean (rude, has a bad attitude, treats other people badly)
	<b>Additional Resources:</b>
	List of Words to Physically Describe Someone in English
	List of Words to Describe Someone’s Personality in English
	Video: 37 Ways to Describe to Someone’s Personal Appearance
	Video/Song: Describing People Vocabulary
	Video: People describing each other`,
	},
	{
		title: "Food",
		icon: Zap,
		content: `Everyone loves to eat, right? Below you will find some phrases to help you talk about food and eating in English.
	My favorite food is________________.
	My least favorite food is ____________.
	I like to eat ___________________.
	I don’t like to eat _________.
	I have never tried ______________.
	I like to cook _______________.
	My _______ cooks the best ______________.
	I don’t know how to cook _____________.
	I would like to learn to cook ________.
	I don’t cook.
	I only know how to cook __________ and ___________.
	This is delicious.
	<b>Example Sentences</b>
	1- My favorite food is spaghetti with meatballs.
	2- My least favorite food is sushi.
	3- I like to eat Chinese food.
	4- I like to cook Mexican food. Spicy food is my favorite.
	5- My mom cooks the best potato salad.
	Questions To Ask About Food and Cooking?
	1- What’s your favorite food?
	2- What kind of food do you like?
	3- Do you like _______ food?
	4- Are you a good cook?
	5- What are you good at cooking?
	6- Have you ever tried __________?
	7- Can you give me the recipe for this?
	8- What is in this food?
	Additional Resources:
	Video about food and restaurants
	`,
	},
	{
		title: "Weather",
		icon: Zap,
		content: `The weather is a very common conversation topic. The weather affects everyone, no matter where they are.
	There are four seasons each year: fall, winter, spring and summer. The weather in each season will vary depending on where you are (geographically) and the year. Some countries experience more mild seasons whereas others experience extreme highs and lows.
	Common Phrases about the Weather
	It’s sunny.
	It’s cloudy.
	It’s rainy.
	It’s hot out today.
	It’s freezing today.
	I hate ____ weather. (cold, hot, rainy, etc.)
	I love this weather.
	I’m sick and tired of this weather.
	Questions to Ask About the Weather:
	What’s the weather like today?
	Is it going to ______? (rain, snow, be hot, be cold, storm, etc.)
	Do you like this weather?
	Do you like hot weather?
	When will this weather ever end?
	Is it supposed to _______ tomorrow? (rain, snow, be hot, etc.)
	What’s your favorite season?
	Isn’t it beautiful today?
	Additional Resources:
	Video- How to talk about the Weather
	Video- The Weather
	Video- Weather Vocabulary`,
	},
	{
		title: "Transportation",
		icon: Zap,
		content: `There are many different means of transportation. The most common being: cars, trains, subway, planes, bicycle and walking.
	Below you will learn some phrases that you can use to talk about transportation.
	I take the bus to _[place name/Work]__ every day.
	I drive to _[place name/Work]___ every day.
	I rarely ________ to work. It is too far away.
	I don’t take the ______. It does not have a reliable schedule.
	Commute- the act of going to and from work
	Traffic- when there are a lot of cars/vehicles on the road
	A ride-  when someone else brings you somewhere in their car
	Example Sentences:
	1- I take the bus to work every day.
	2- My commute takes two hours. There is always a lot of traffic.
	3- I ride my bike to work.
	4- We usually walk to stores. If we have to go far we drive in the car.
	Questions to Ask about Transportation:
	How do you get to school?
	How do you get to work?
	Do you take public transportation?
	Do you have a long/short commute?
	Do you drive to work every day?
	Do you use public transportation?
	Where’s the closest bus stop to here?
	Does this bus/train go to ___________?
	What time does the next _____ come? (bus, train, etc.)
	Additional Resources:
	Video: Public Transportation
	Video: Means of Transportation Vocabulary
	`,
	},
	{
		title: "Telling Time",
		icon: Zap,
		content: `Time is important. In the United States it is customary to be punctual or arrive on time to places. It is not common to arrive late or after a designated meeting time. It is considered rude to arrive late.
	When reading a clock, it is customary to state the exact time. Some people round up but telling the exact time is more common.
	For example:
	2:00= It’s two o’clock.
	10:15= It’s ten fifteen.
	4:30= It’s four thirty. (In British English uses ‘half past’ instead of ‘30’.
	6:45= It’s six forty-five. or it’s a quarter to seven.
	11:25= It’s eleven twenty-five.
	If it’s almost a time you can say….
	It’s almost _____.
	1:57 = It’s almost two.
	Questions: You Can Ask about Time
	What time is it?
	What time do you work?
	What time do you go to school?
	What time do you get out of school?
	What time does the movie start?
	What time does the class end?
	When does the aerobics class meet?
	How long is the English class?
	Additional Resources:
	Video: Telling Time in American English
	Video: Expressing Time in English
	`,
	},
	{
		title: "Directions",
		icon: Zap,
		content: `Sometimes you need help finding something or someplace. Below are common phrases used to talk about directions in English.
	Excuse me, where is…..?
	I need to get to _______.
	On/at: the corner
	Between: in the middle of two things
	Near/Close to…: immediately close to something
	Far away from: not near, distant Straight
	Opposite: in front of, contrary side
	Example Sentences:-
	1- The school is in between South Ave. and Birch Street.
	2- Go straight for three blocks and then turn right. It is the third house from the corner.
	3- McDonalds is opposite Taco Bell in the food court at the mall.
	4- I live close to West Tower on Broadway Ave.
	Questions Used to Ask for/Give Directions
	Where is ___________?
	How do you get to _______?
	Where is the nearest _______?
	Can you tell me how to get to _____?
	Could you tell me where the _______ is?
	Is there a ________ close by?
	Additional Resources:
	Video: How to give directions in English
	Video: Learn how to give directions
	Video: Basic Vocabulary for giving directions
	`,
	},
	{
		title: "Calendar & Dates",
		icon: Zap,
		content: `There are seven (7) days of the week. In the United States, Sunday is the first day of the week. Days and Months are capitalized in English. So, they start with a BIG letter.
	Days: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
	Months: January, February, March, April, May, June, July, August, September, October, November,December
	Date: For stating the date you need to use ordinal numbers in English. (First, second, third, etc.)
	Today is _____.
	Yesterday was _______.
	Tomorrow will be ________.
	Examples of the date:
	May 18th= Say: May eighteenth
	December 25th- Say:December twenty-fifth
	January 1st, 2014= Say:January first, two thousand fourteen
	March 9th, 2012= Say:March ninth, two thousand twelve
	November 15th, 1980= Say:November fifteenth, nineteen eighty
	October 31st, 1954= Say:October thirty first, nineteen fifty-four
	July 19th, 1846= Say: July nineteenth, eighteen forty-six.
	Weekday = Monday, Tuesday, Wednesday, Thursday, Friday
	Weekend= Saturday and Sunday
	Holiday= Special day, usually celebrating something (Independence day, Christmas, Mother’s Day etc.)
	Birthday=the day someone was born (February 11th, December 6th, etc.)
	Questions about the Calendar:
	What day is today?
	What is today’s date?
	What day do you ___________?
	How many days do you _____ a week? (work, go to school, study, etc.)
	What year were you born?
	What year did you _______? (go to Brazil, move to New York, etc.)
	Additional Resources:
	Video: Questions about the calendar
	Video: Days of the week
	Video/Song: Months of the year
	Video: How to pronounce Ordinal numbers`,
	},
	{
		title: "Numbers",
		icon: Zap,
		content: `Knowing how to read and understand numbers are an essential part of improving your English language skills.
	Look in the resources section on learning basic numbers 0-99.
	Large numbers:
	100= one hundred
	1,000= one thousand
	10,000= ten thousand
	100,000= one-hundred thousand
	1,000,000= one million
	Reading large numbers:
	346=three hundred forty-six
	When talking about numbers or the amount of something you will say… ‘How many
	__________?’
	For example:
	How many eggs are in a dozen?
	How many students are in the class?
	How many people went to the party?
	When talking about money you will use ‘How much…?”
	For example:
	How much does a box of cookies cost?
	How much do I owe you?
	How much does it cost?
	How much do you make an hour?
	How much did he pay you?
	How much do you pay for car insurance?
	Additional Resources:
	Video: Numbers 0-99
	Video/Song: Big Numbers Song
	Video: Reading Big Numbers in English
	Video: Reading numbers in English
	`,
	},
	{
		title: "Where are you from?/Nationalities",
		icon: Zap,
		content: `What is your nationality? Where are you from? When someone wants to know what country or place you are from they would ask you this question.
	You can state which nationality you are or which
	I am___________.
	Examples for stating your nationality:
	I am American.
	He is French.
	She is Brazilian.
	My mother is Spanish.
	He is Dominican.
	Where are you from?
	It is common to state where you are from, by stating the country, state or city you grew up in.
	I am from ___________.
	Examples:
	I am from Germany.
	He is from Japan.
	She is from New York.
	My grandpa is from Sweden.
	My friend is from Egypt.
	Where do you live now?
	When talking about the present you would state where you live now or presently.
	I live in ___________.
	Examples:
	I live in Miami, Florida.
	He lives in Buenos Aires.
	My brother lives in the Saudia Arabia.
	She lives in Los Angeles.
	Additional Resources:
	Video: Nationalities in English
	Video: Where are you from? Where do you live?
	Nationalities Vocabulary with Audio TV & Movies Watching TV and movies is something that most people enjoy.
	`,
	},
	{
		title: "Talking about TV",
		icon: Zap,
		content: `Common Types of TV shows: Sitcom- amusing show about fictional characters
	Cartoon- animated drawings
	Reality- follows real people around, doing ‘real’ things,
	Soap Opera- fictional show that goes on for a long time and is often very dramatic
	I like to watch ____________shows.
	My favorite TV program is _______________.
	I don’t watch TV.
	Did you see the last episode of _____________?
	What happened last night on ____________?
	Talking about Movies:
	Many people like to go to the movie theater, rent movies or view movies online.
	Common Movie Genres:
	Comedy, action, drama, horror, family, romance and thriller.
	Rating: Many countries have a rating system that tells you who should watch the movie, from children to only adults.
	Matinee:a show in the afternoon
	Sequel:a second movie in a series
	I heard ______ is a good/bad movie.
	__________ was a great movie.
	I really want to see ____________.
	What time is ________ movie showing?
	How much does it cost to see ______?
	Do you want to go to _______ with me?
	Did you like the ending of _____________?
	Additional Resources:
	Video: Talking about movies in English
	Video: 12 Phrases to describe movies
	Video: Talking about movies
	Video: Talking about TV Shows
	`,
	},
	{
		title: "Neighborhoods and Houses",
		icon: Zap,
		content: `There are any types of places to live; with a house and an apartment being the most common.
	Below you will learn some vocabulary to help you talk about and describe where you live.
	Urban:
	 a population dense area, main area of a city
	Rural:
	 a place where very few people live
	Suburb:
	 a place outside of the city but not too far away
	Apartment:
	 several rooms that form a dwelling, there are usually many in the same building
	Condo:
	 Similar to an apartment by is usually privately owned
	Duplex:
	 house that is separated and has two separate dwelling areas
	House:
	 single family home/building
	Rent:
	 you pay a monthly fee to live in a place
	Own:
	 the property is your personal possession
	Roommate:
	 someone you live with
	I rent ____________.
	I live in ____________ .
	I pay $______ per month for rent.
	I live with ________________ in a ________________.
	Example Sentences
	1- I rent a two bedroom apartment downtown. My friend John is my roommate.
	2- I live in a rural area outside of Atlanta with my family.
	3- We own a duplex in a suburb of Toronto.
	4- My rent is $1000 per month.
	5- I live with my sister in an apartment.
	Additional Resources
	Video: Apartments for Rent
	Video: 10 Phrases for Renting an Apartment
	Video: Talking about your house and neighborhood`,
	},
	{
		title: "Grocery Shopping",
		icon: Zap,
		content: `Everyone needs to eat. When you need to buy food you go to the grocery store or supermarket. Below
	you will learn vocabulary and phrases to help you go grocery shopping.
	Shopping Cart:
	 Buggy/Car you push around and put food in
	Shopping Basket:
	 something you carry and put food in
	Aisle:
	 Corridor or lane that food is separated into
	Asking for something:
	Do you have ____________?
	Where can I find ___________?
	Sections of the Grocery Store
	Produce:
	 fruits and vegetables section
	Dairy:
	 milk, cheese and yogurt section
	Bakery:
	 bread, donuts, cakes section
	Frozen Food:
	 many types of food are frozen in freezers, ice cream, pizza, meals for one person, etc.
	Deli:
	 have sliced cheese and meats and salads available for purchase
	Out of Stock
	: there are no more left
	When will you get more ____________?
	Cashier:
	 the person that rings up your order
	Paper or plastic?:
	 the kind of bag would you like to use; one made out of paper or one that is plastic
	Coupons:
	 paper or electronic discounts that let you purchase an item for less money
	Do you have any coupons?
	Additional Resources
	Video: 
	At the Grocery Store
	Video: 
	English Phrases for the Supermarket
	`,
	},
	{
		title: "Restaurant or Coffee Shop",
		icon: Zap,
		content: `It is nice to go out to eat or drink once in a while. Order food in a public place can be difficult,
	especially if you are learning a new language.
	Below you will find some phrases to use at restaurants or coffee shops.
	I would like a table for _____.
	I have a reservation for ____________.
	Waiter/Waitress:
	 the person that takes orders and brings you food and drink
	In the United States it is not common for you to make noises or gestures to get the waiters attention. It
	is best to try to make eye contact with by looking at them.
	Ordering:
	I would like to have _________.
	Can I get ____________?
	Do you have any specials?
	What do you recommend?
	Problems/Complaints:
	This is not what I ordered.
	You forgot to add the _________.
	This is too cold/too hot/burnt.
	Could you bring me more ___________?
	Paying:
	Could I have the bill please?
	Can I get the check please?
	Tip:
	 It is common to tip (or leave more money) to the wait staff in sit down restaurants. Most people
	leave a 15% or 20% tip.
	Extra food
	Can I get a to-go box?
	Can I get a take away box?
	Can I get a doggy bag?
	Additional Resources:
	1- Video: How to order in a restaurant
	2- Video: Basic English Vocabulary for Restaurants
	3- Video: Expressions Used at a Restaurant
	`,
	},
	{
		title: "Clothes and Shoes",
		icon: Zap,
		content: `Buying new clothes and shoes can be difficult when you are trying to do it in a new language.
	Below you will find phrases to help you shop for clothing and shoes in a store.
	Looking for Something
	I am looking for _____________. Can you tell me where to find it?
	Where can I find _______________?
	Do you have this in size ____?
	Do you have this in red/blue/black?
	Do you have a _____________ one? (bigger, smaller, shorter, longer, etc.)
	Trying Clothes On
	Where is the dressing room? I would like to try these on.
	Can I try this on?
	It fits.
	It’s too big.
	It’s too small.
	Paying/Price
	How much is it?
	How much does this cost?
	Additional Resources:
	Video: Shopping for Clothes
	Video: Let’s go shopping!
	Video: Clothing Vocabulary
	Video: Talking about Shopping
	`,
	},
	{
		title: "Being Sick, Doctors and Hospitals",
		icon: Zap,
		content: `Everyone gets sick once in a while. Below you will find phrases to help you talk about sickness in
	English.
	Problems:
	I feel sick.
	I need to go to the doctor.
	Cold symptoms include:
	 Sneezing, congested, headache, sore throat, etc.
	I have a cold.
	Flu symptoms include:
	 fever, chills, nausea, runny nose, sore throat, etc.
	I have the flu.
	What are you symptoms?
	Where does it hurt?
	Common Symptoms of Sickness: (symptoms – signs /concerns)
	Headache-
	 head hurts
	Stomachache-
	 stomach hurts
	Dizzy
	- feel light headed, or that the room is spinning
	Earache
	- ear hurts
	Cough
	- a loud noise from lungs/mouth when you expel air
	Diarrhea
	- go to the bathroom (defecate) at lot, many times
	Toothache
	- tooth hurts
	Example Sentences
	I have a stomachache.
	I have had an earache for the last week.
	I have been dizzy for a few hours. I’m not sure why.
	Additional Resources:
	Video: Talking about being Sick
	Video: 12 Questions Doctors ask Patients
	Video: English Health Vocabulary
	`,
	},
	{
		title: "Crime, Safety and Police",
		icon: Zap,
		content: `Crime, safety and police are topics that you should know how to talk about. Even if you do not
	experience crime first hand; you will hear and see crime talked about on the news and TV. It is a
	common topic.
	High Crime Rate-
	 a lot of crimes in a certain area or year
	Low Crime Rate-
	 few crimes in a certain area or year
	Victim of a crime-
	 person that had a crime committed against them
	In Case of an Emergency:
	Call the Police!
	Call 9-1-1!
	Reporting a Crime/Problem:
	There is a fire at __________________. (state location or address)
	Someone has been hurt at _____________. (state location or address)
	Arrested
	: the police detained a person
	Charged with _____
	:
	Ticket/Fine
	: Money you have to pay to the police or government for breaking or violating a law. (For
	example: parking illegally, driving too fast, etc.)
	List of Crimes/Problems:
	Robbed
	- something was taken without permission
	Pick pocketed
	- wallet was stolen/taken
	Car Jacked
	- car was robbed/removed from owner
	Car accident
	- cars hit each other and resulted in damage/injury
	Additional Resources:
	Video: Talking about crime
	`,
	},
	{
		title: "Problems/Advice",
		icon: Zap,
		content: `We often have problems and need advice. Below are phrases to use to talk about your problems and how to give advice to others.
	Asking about a problem
	What’s wrong?
	What’s the matter?
	Problem
	I am __________.
	Giving Advice
	You should ____________.
	If I were you, I would __________.
	Maybe you should ____________.
	Examples of problems and advice:
	Problem: I am cold.
	Advice: You should put a sweater on.
	Problem: I have a headache
	Advice: Maybe you should take some medicine.
	Problem: I am sick.
	Advice: If I were you, I would go to the doctor.
	Problem: I failed my math exam.
	Advice: If I were you, I would ask the professor if you can take it again.
	Additional Resources:
	Video: How to Give Advice
	Video: Learn to Give Advice
	Video: Should, Ought to, Had Better (Advanced)
	`,
	},
	{
		title: "Making Plans/Making Excuses",
		icon: Zap,
		content: `Everyone has to make plans; whether it is to go to a meeting or out to eat. Below, you will learn some common phrases for making plans with someone and making excuses.
	Ask:
	Do you want to ___________?
	Would you like to __________?
	Can you please ___________?
	Example Questions:
	Do you want to go to the movies with me?
	Would you like to go to the beach?
	Can you please pick me up at 3pm?
	Answering yes:
	Yes!
	Yes, I would.
	Yes, I think that will work.
	Excuses:
	It is rude to just say ‘no’ when someone wants to make plans or do something with you.
	I’d like to but __________.
	I can’t because ___________.
	Sorry, that won’t work because ____________.
	I have other plans.
	I’m busy that day.
	Example Excuses:
	I’d like to but I don’t have any money.
	I can’t because I’m sick.
	Sorry, that won’t work because I have class.
	I have other plan on Saturday.
	Additional Resources:
	Video: Making Plans in English
	`,
	},
	{
		title: "Invitations",
		icon: Zap,
		content: `Knowing the correct way to invite someone to do something can be difficult in a new language. Below, you will learn phrases to help you invite someone to do something in English.
	Inviting Someone to do Something
	Would you like to ________ with me?
	Would you like to go ____________ on Saturday?
	I’m going to ________. Do you want to come with?
	Are you free on _______________?
	Example Invitations:
	Would you like to go out to dinner with me?
	Would like to go shopping with me after class?
	I’m going to the library. Do you want to come with?
	Are you free on Sunday afternoon?
	RSVP: means you need to let them know before the event if you will be attending. Usually you can
	call, email or send a card/letter back to RSVP.
	Turning Down (Saying ‘no’ to) an Invitation:
	I’m sorry I can’t _______________.
	I’m busy that day.
	I don’t think that will work out.
	Let me check my calendar and get back to you.
	Additional Resources:
	Video: Phrases for Invitations
	Video: Would you like…? (polite invitations and offers)
	Video: How to turn down an invitation
	`,
	},
	{
		title: "Talking about Your feelings",
		icon: Zap,
		content: `Leaning to talk about how you feel is important. Below you will learn some phrases and vocabulary to help you talk about your feelings and emotions in English.
	Asking Someone ‘How they are?’
	How are you?
	How are you feeling?
	How’s it going?
	How you doing?
	If Feeling Good, Say…
	I’m good.
	I’m great.
	Not too bad.
	If Feeling Bad, Say…
	I’ve been better.
	Not too great.
	I’m a little under the weather.
	Other Common Feelings:
	I’m bored.
	I’m disappointed.
	I’m tried.
	I’m sleepy.
	I’m exhausted.
	I’m depressed.
	Phrases to Help You Express Your Feelings
	I don’t like when you ____________.
	I feel ____________ when _____________.
	I don’t like it when it _____________. It makes me feel __________.
	Additional Resources:
	Video: Learn Emotions and Feelings
	`,
	},
	{
		title: "Agreeing and Disagreeing",
		icon: Zap,
		content: `Learning how to agree and disagree with a statement is important. Below you will learn phrases to help you do this.
	The most common ways to agree:
	“Me too.” (Response to a positive statement)
	“Me neither.” (Response to a negative statement)
	Examples of Agreeing:
	I love this weather. Respond: “Me too.”
	I like chocolate cake. Respond: “Me too.”
	I don’t like sea food. Respond: “Me neither.”
	I haven’t ever been here before. Respond: “Me neither.”
	“So do I” (Response to a simple positive statement)
	“Neither do I” (Response to a simple negative statement)
	Examples of Agreeing:
	I love Mickey Mouse. Respond: “So do I,”
	I don’t like spicy food. Respond: “Neither do I.”
	The most common ways to disagree:“I don’t.”
	Examples of Disagreeing:
	I like pizza. Respond: “I don’t.”
	I love Justin Bieber. Respond: “I don’t.”
	Additional Resources:
	Multiple Ways to Agree & Disagree
	Video: How to Agree and Disagree in English
	Video: Agreeing to do Something
	Video: How to Disagree in English
	Video: How to Agree with So, Neither, and Too
	`,
	},
	{
		title: "Similarities and Differences",
		icon: Zap,
		content: `Being able to make comparisons is important. Below you will learn some common phrases to help you talk about similarities and differences.
	Sentence Starters to Talk about Similarities
	___________ is like _________.
	__________ is similar to ___________.
	They both ____________.
	They don’t ____________.
	They can’t _____________.
	Example Sentences:
	This is like that.
	They both can swim great.
	They can’t read yet.
	Emily is similar to James. They both love to dance.
	Sentence Starters to Talk about Differences
	__________ is bigger than __________.
	__________ is smaller than __________.
	__________ is better than ___________.
	__________ is more expensive than ____________.
	__________ is nicer than ___________.
	__________ is more helpful than _________.
	Example Sentences:
	The elephant is bigger than the mouse.
	The BMW is more expensive than the Honda.
	This shirt is nicer than that one.
	Additional Resources:
	Video: Comparisons
	Video: 1:-Making Comparisons
	2:-Comparing/Contrasting Activity
	`,
	},
	{
		title: "Stating Your Opinion",
		icon: Zap,
		content: `When you want to express what you think about something there are many different sentence starters that you can use.
	I think…
	In my opinion…
	I’d suggest…
	In my mind…
	In my experience…
	Personally, I think…
	If you want an honest opinion…
	As far as I’m concerned…
	I’d say…
	The way I see it…
	I am of the opinion that…
	I believe that…
	If you ask me…
	As far as I understand it…
	As I see it…
	It seems to me that…
	My personal view is that…
	Example Sentences:
	1- I think pizza is the best food ever.
	2- It seems to me that she doesn’t know what she is doing.
	3- In my experience, people are more productive in silence.
	4- I believe that he is one of the best actors.
	5- I’d suggest we go to McDonalds instead of Burger King.
	Additional Resources:
	1- Video on how to express your opinion in English.
	2- Another video on how to give your opinion in English
	`,
	},
	{
		title: "Complaining",
		icon: Zap,
		content: `You complain when something does not go or is not right. There are many expressions you can use to complain in English.
	I’m sorry to bother you but…
	There seems to be a problem with…
	Can you please help me with…
	I want to complain about…
	Could you please tell me why…
	I’m sorry to say this but…
	I hate to tell you but…
	I’m not satisfied with…
	Example Complaints:
	- I’m sorry to bother you but I need more ketchup.
	- There seems to be a problem with my order. I didn’t get the right thing.
	- I hate to tell you but this food is cold.
	- I’m not satisfied with the service. The waiter hasn’t been to our - table in more than 20 minutes.
	Additional Resources:
	Text with Audio: How to Complain in English
	Video: 5 Useful Phrases to Politely Complain in English
	Video: Making a Complaint
	Video: Complaining at a Restaurant
	`,
	},
	{
		title: "Requesting Information/Asking for Something",
		icon: Zap,
		content: `If you know how to make a request politely, you will make a better impression on others. Being polite. It is important, with your friends, family, and strangers.
	Would you please… ?
	Could you please…?
	Can you please… ?
	(informal)
	Example Sentences:
	- Would you please wake me up at 7am?
	- Could you please carry my suitcase? It’s really heavy.
	- Could you please fill out this form?
	- Would you please bring us two cups of coffee with sugar?
	- Could you please tell me your name again? I seem to have forgotten it.
	- Would you please call Mr. Peterson and tell him I am running late?
	- Can you please give me another drink?
	- Could you please say that again?
	Would you mind… ?
	Example Sentences:
	-Would you mind closing the door? It’s really loud out there.
	-Would you mind telling me where you bought this salad? It’s delicious.
	-Would you mind turning down the music? I can’t hear you.
	-Would you mind if I used your phone really quickly? I have to call my grandmother.
	Additional Resources:
	Video: Making polite requests
	`,
	},
	{
		title: "Asking questions",
		icon: Zap,
		content: `There are many different ways to ask questions in English. Below you will find the most common question words and there are many resources for you to use to improve your ability to ask and answer questions.
	Most common question words:
	Who…?
	What…?
	Where…?
	When…?
	Why…?
	How…?
	How many…?
	How much…?
	Is _____?
	Are_____?
	Do_____?
	Did_____?
	Example Questions:
	What time is it?
	Is this yours?
	Are you in line?
	How much does this cost?
	Where is he?
	Did you see the movie?
	Additional Resources:
	Video: How to Ask Questions
	Video: The easy way to ask questions
	Video: Question Formation
	Video: How to Understand Native Speakers Questions
	Text: How to Form Yes/No Questions in English
	`,
	},
	{
		title: "Interjections",
		icon: Zap,
		content: `Interjections are a sound people make that has a common meaning. There are tons of common interjections in English. You most likely have heard them and maybe you use them as well.
	Mmmmmmmm!
	Expresses: Something tastes good. Is delicious.
	Yeah!
	Expresses: Agreement
	Duh!!
	Expresses: When something seems obvious or foolish.
	Just Kidding!
	Expresses: Used to regret something you just said. Means ‘just tricking’ or joking’. It’s not real.
	Shhhhh…!
	Expresses: To be quiet. Silence.
	Wow!
	Expresses: Surprise
	Um…
	Expresses: Uncertainty or confusion
	Yuck!
	Expresses: Disgust.
	Additional Resources:
	Text & Audio: 20 Interjections in English
	Video: 10 Interjections Examples in English Conversation
	Video: Interjections in English || Interjection Word List
	`,
	},
	{
		title: "One Last Thing…",
		icon: Zap,
		content: `If you enjoyed this book and found it helpful, I would be very grateful if you would leave a short review on Amazon. Your thoughts and support really does make a difference.
	If you’d like to leave a review, click on this link.
	http://englishtonightbooks.com
	Thanks again for your support! For more tips, articles, video and activities to help you improve your
	English please visit my website: English-Tonight.com
	`,
	},
	{
		title: "Other Books By This Author",
		icon: Zap,
		content: `How to Speak English Fluently`,
	},
]

export function DocumentationAccordion() {
	const [darkMode, setDarkMode] = useState(true)

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark")
			localStorage.setItem("theme", "dark")
		} else {
			document.documentElement.classList.remove("dark")
			localStorage.setItem("theme", "light")
		}
	}, [darkMode])

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme")
		if (savedTheme === "dark") setDarkMode(true)
	}, [])

	return (
		<div className="mx-auto max-w-5xl px-4 max-md:px-1.5 py-10 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
			<div className="mb-6">
				<div className="flex justify-between">
					<h1 className="mb-4 text-5xl max-[768px]:text-3xl font-bold tracking-tight text-balance">650 English Pharases for Everyday Speaking</h1>
					<div className="flex justify-end max-md:absolute max-sm:top-0 max-md:right-3 my-2 max-sm:mt-0">
						<button
							onClick={() => setDarkMode((prev) => !prev)}
							className="rounded w-full px-3 py-2 bg-card border shadow hover:bg-muted transition"
							aria-label="Toggle dark mode"
						>
							{darkMode ? "🌙 Dark" : "☀️ Light"}
						</button>
					</div>
				</div>
				<p className="text-lg text-muted-foreground text-pretty max-md:pl-2">
					To improve your English speaking, practice regularly with others and listen to native speakers. Don’t be afraid to make mistakes—each one helps you learn. Try to think in English and use new words in daily conversations. Consistency is key to becoming more confident!.
				</p>
			</div>

			<Accordion type="single" collapsible className="space-y-2 ">
				{documentationSections.map((section, index) => {
					const Icon = section.icon
					return (
						<AccordionItem
							key={index}
							value={section.title}
							className="rounded-lg border bg-card px-3 shadow-sm transition-shadow hover:shadow-md"
						>
							<AccordionTrigger className="py-6 text-left hover:no-underline">
								<div className="flex items-center gap-4">
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
										<Icon className="h-5 w-5 text-primary" />
									</div>
									<span className="text-xl font-semibold">{section.title}</span>
								</div>
							</AccordionTrigger>
							<AccordionContent className="pb-6 pt-2">
								<div className=" space-y-4 text-muted-foreground leading-relaxed">
									{/* {section.content.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))} */}
									{/* <p className="whitespace-pre-line text-lg">{section.content}</p> */}
									<p className="whitespace-pre-line text-lg" dangerouslySetInnerHTML={{ __html: section.content }}></p>
								</div>
							</AccordionContent>
						</AccordionItem>
					)
				})}
			</Accordion>

			<div className="mt-12 rounded-lg border bg-muted/50 p-6">
				<h2 className="mb-2 text-lg font-semibold">Need more help?</h2>
				<p className="text-sm text-muted-foreground">
					Can't find what you're looking for? Check out our{" "}
					<a href="#" className="text-primary hover:underline">
						community forum
					</a>{" "}
					or{" "}
					<a href="#" className="text-primary hover:underline">
						contact support
					</a>
					.
				</p>
				<div className="flex justify-center align-middle"><span>CopyRight &copy; 2025 <strong className="text-sm! underline">AbdeMustafa</strong></span></div>
			</div>
		</div>
	)
}