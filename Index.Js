import fs, { writeFile } from 'fs';
import readline from 'readline';
const filesystem= fs.promises;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const showmenu = () => {
console.log("\n1. Create a file");
console.log("\n2. add content to a file");
rl.question("enter your choice:", handleinput);
}

const handleinput = (option) =>{
    if(option ==="1"){
        rl.question("enter the file name:",  (filename)=>{
             writeFile(filename);
             console.log(`\n file created: ${filename}`);
             showmenu();
        })
    }
    else if (option ==="2"){
        rl.question("enter the file name to add content:", (filename) => {
            rl.question("enter the content to add:", (content) => {
                filesystem.appendFile(filename, content)
                    .then(() => {
                        console.log(`\n content added to ${filename}`);
                        showmenu();
                    })
                })
            })                     
    }
}
showmenu();

