class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dicc = {}
        salida = []

        for palabra in strs:
            ordenada = "".join(sorted(palabra))
            if not ordenada in dicc:
                dicc[ordenada]=[palabra]
            else:
                dicc[ordenada].append(palabra)
        
        for res in dicc:
            salida.append(dicc[res])
            
        return salida
        