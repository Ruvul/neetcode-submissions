class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        dicc = {}
        salida = []

        for num in nums:
            num_key=str(num)
            if not num_key in dicc:
                dicc[num_key] = 1
            else:
                dicc[num_key] += 1

        dicc_ord = dict(sorted(dicc.items(), key=lambda x: x[1], reverse=True))
        dicc_list =list(dicc_ord.keys())
        
        for llave in dicc_list:
            salida.append(int(llave))

        return salida[:k]

        