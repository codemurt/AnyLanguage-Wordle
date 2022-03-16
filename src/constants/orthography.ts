import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'ё',
  'й',
  'ц',
  'у',
  'к',
  'е',
  'н',
  'г',
  'ш',
  'щ',
  'з',
  'ӟ',
  'х',
  'ъ',
  'ф',
  'ы',
  'в',
  'а',
  'п',
  'р',
  'о',
  'ӧ',
  'л',   
  'д',   
  'ж',    
  'ӝ',    
  'э',    
  'я',   
  'ч',   
  'ӵ',    
  'с',    
  'м',    
  'и',
  'ӥ',   
  'т',
  'ь',  
  'б',   
  'ю',    
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
