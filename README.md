# file_Creation_Module
A nodeJs module to create files and adding data into it using command line interface. 

# fs module of NodeJs used to deak with file system 
import fs, { writeFile } from 'fs';

# readline module of nodeJs used to create an interface with the terminal 
import readline from 'readline';
const filesystem= fs.promises;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
