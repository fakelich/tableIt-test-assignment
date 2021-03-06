import { tableIt } from '../utils/tableIt.js';

const mockData = [{ "name": "Ruth Jackson", "position": "Developer", "location": "Berlin", "age": 65, "dateFrom": "2013-08-10T20:00:00.000Z", "salary": 131962 }, { "name": "Debra Allen", "position": "Support Lead", "location": "Saint-Petersburg", "age": 23, "dateFrom": "2013-03-02T20:00:00.000Z", "salary": 393386 }, { "name": "Gerald Harris", "position": "Junior Javascript Developer", "location": "Saint-Petersburg", "age": 40, "dateFrom": "2013-01-31T20:00:00.000Z", "salary": 124328 }, { "name": "Raymond Carter", "position": "Senior Marketing Designer", "location": "Moscow", "age": 47, "dateFrom": "2012-12-17T20:00:00.000Z", "salary": 344512 }, { "name": "Jacqueline Torres", "position": "Integration Specialist", "location": "Berlin", "age": 65, "dateFrom": "2012-12-01T20:00:00.000Z", "salary": 397209 }, { "name": "Joseph Nelson", "position": "Marketing Designer", "location": "Moscow", "age": 70, "dateFrom": "2012-11-26T20:00:00.000Z", "salary": 247175 }, { "name": "Carlos Sanchez", "position": "Software Engineer", "location": "Moscow", "age": 40, "dateFrom": "2012-10-12T20:00:00.000Z", "salary": 187584 }, { "name": "Ralph Clark", "position": "Personnel Lead", "location": "Saint-Petersburg", "age": 35, "dateFrom": "2012-09-25T20:00:00.000Z", "salary": 254637 }, { "name": "Jean Alexander", "position": "Sales Assistant", "location": "Toronto", "age": 56, "dateFrom": "2012-08-05T20:00:00.000Z", "salary": 172018 }, { "name": "Stephen Roberts", "position": "SoftwareEngineer", "location": "Toronto", "age": 55, "dateFrom": "2012-05-31T20:00:00.000Z", "salary": 151496 }, { "name": "Eric Long", "position": "Sales Assistant", "location": "Toronto", "age": 31, "dateFrom": "2013-05-31T20:00:00.000Z", "salary": 145077 }];

tableIt(
    document.getElementById('table-root'),
    mockData, {
        maxPerPage: 5
    }
)
