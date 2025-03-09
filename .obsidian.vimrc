" 基本设置
" syntax on               " 语法高亮
" call plug#begin('~/.vim/plugged')
" Plug 'morhetz/gruvbox'          " 配色方案
" Plug 'vim-airline/vim-airline'  " 状态栏
" Plug 'preservim/nerdtree'       " 文件浏览器
" Plug 'neoclide/coc.nvim', {'branch': 'release'} " 代码补全
" call plug#end() 

" 在文件末尾添加这些设置
set clipboard=unnamed   " 使用系统剪贴板
set wrap               " 自动换行
set linebreak         " 不会在单词内部换行
set showmatch         " 显示匹配的括号
set wildmenu          " 命令行自动补全 

" 在键位映射部分添加
" 快速复制到行末
nnoremap Y y$
" 居中显示搜索结果
nnoremap n nzz
nnoremap N Nzz
" 取消搜索高亮
nnoremap <leader>nh :nohl<CR> 