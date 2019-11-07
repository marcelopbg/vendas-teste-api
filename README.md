# vendas-teste-api

Database DLL

CREATE TABLE `pessoas` (
 `id` int(11) NOT NULL,
 `nome` varchar(255) NOT NULL,
 `documento` bigint(11) NOT NULL UNIQUE, 
`telefone` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL 
) 
