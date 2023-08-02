#!/usr/bin/env node
'use strict';
const pack = require('./package.json')
const fs = require('fs')
const path = require('path')

const ATUAL_DIR = process.cwd()
const _args = process.argv.splice(2, process.argv.length - 1)


const cmdVersionPattern = /--version|-v/g; 
const cmdHelpPattern = /--help|-h/;
const cmdExtensionPattern = /--ext\s+(\w{1,12})\s+(\w{1,12})/;


let totalDeArqModify = 0;

const version = cmdExtensionPattern.exec(_args.join(' '))//_args.join(' ').match(cmdVersionPattern )
console.log(version)
switch(version?.input){
	case '--version' || '-v':
		console.log(pack.version)
		break;
}


//const help = _args.match(cmdHelpPattern)
//const extension = _args.match(cmdExtensionPattern)



/*
if(_args == '-v' || _args == '--version'){
	console.log('versão: %s', pack.version)	
	process.exit(1)
}else{
	if(_args == '-h' || _args == '--help'){
		console.log(`
			======= varre files extension =======
			-h ou --help 			: Ajuda.
			-v ou --version 		: Mostra a versão do [varre file extensão (VFE)].
			--ext [ext_1] [ext_2] 	: altera os ficheiros com [ext_1] para extensção [ext_1]. 
		`)
		process.exit(1)
	}else{
		
		
		
		if(_args && extension){
			const [__flag, ext_1, ext_2] = extension?.input.split(/\s{1,}/)

			console.log(__flag, ext_1, ext_2)
			
			var files = fs.readdirSync(atualdir)
			var extOld = new RegExp(`(\\.${extension[1]}$)|(\\.js\\.${extension[1]}$)`)
			console.log(files, extOld)
			files.forEach((file, i)=>{
				if(extOld.test(file))
				if(extOld.test(file)){
					var newdir = file.replace(extOld, '.'+extension[2])
					console.log(newdir)
					fs.rename(file, newdir, (err)=>{
						if(err) throw err;
					})
				}else{
					console.log("Nenhum ficheiros encontrado");
					process.exit(1)
				}
				if(files.length == i+1){
					console.log("===completed===")
					console.log("os arquivos %s foram convertidos para %s", "."+extension[1], "."+extension[2])//console.log('name Ficheiros: %s', newdir)
					process.exit(1)
				}
			})
			
			
		}else if(_args.split(' ')[0] == '--ext'){
			console.log('Nenhuma operação relizada com o comando: '+_args)
		}
	}
}

*/