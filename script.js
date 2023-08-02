const path = require('path');
const fs = require('fs');

function normalize_ext(url, ext){
    const uri = path.resolve(url || __dirname)
    var files = fs.readdirSync(uri);

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if(/\.(download)$/g.test(file)){
            var oldPath = file;
            var newPath = file.replace(/\.(download)$/, '.'+ext || '.js')
            fs.rename(oldPath, newPath,(err)=>{
                if(!err){
                    console.log('renomeado! '+file)
                    if((i+1) == files.length){
                        console.log("===|Completo|==")
                    }
                }else{
                    console.log('Ocorreu erro ao renomear os ficheiros verifica a urls :(');
                }
            })
        }
    }
}
normalize_ext()