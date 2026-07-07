/* =====================================================================
   COMPORTAMENTO INTERATIVO DO PORTAL FANTASYTOCA
   SISTEMA DE BANCO DE DADOS EM MEMÓRIA
   ===================================================================== */

const TEMAS_INICIAIS = [
    {
        id: 'congelante',
        name: 'Aventura Congelante',
        category: 'Princesas',
        description: 'Magia de inverno para sua festa.',
        fullDescription: 'Inspirada nos contos de fadas das rainhas do gelo, esta luxuosa fantasia traz toda a delicadeza do algodão e cetim, combinada com lantejoulas vibrantes que refletem a luz como pequenos flocos de neve cristalizados. Possui uma gola de pele sintética extremamente aconchegante e confortável.',
        price: 120.00,
        sizes: ['P (3-4 anos)', 'M (5-6 anos)', 'G (7-8 anos)'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIaznDtaHs1mKKKpW2UbI32yZbF58HPXl-6deL9-xVUpwAycSlmKBOCVHbhrgPEp2Iqx3WjHXUiroPoTWArsuW66SacJcHturYd2PYwyqZVajyIaOF2EXsjmfCrYg_n-iZVNYZIkQjex9E0ZM4heQdzYbMwvvVhqM3rq6y4yUMQ2jEvfWlq6orM3SpVljBSKCiEw4JLNtHRDA0jr5X2SmzCN6wy39ErfmKfZo7kfzQszh92io5uUdoumucGFN5aiYVTqYi0jrE7w',
        status: 'Disponível',
        accessories: ['Coroa de Cristais Brilhantes', 'Capa de Organza e Flocos Prateados', 'Gola de Pele Sintética Removível'],
        material: 'Cetim Nobre, Organza Italiana e Lantejoulas Costuradas à Mão',
        careInstructions: 'Higienizada profissionalmente com produtos hipoalergênicos e esterilizada à base de luz UV e vapor após cada aluguel.'
    },
    {
        id: 'batman',
        name: 'Herói da Noite',
        category: 'Heróis',
        description: 'Ação e aventura em Gotham.',
        fullDescription: 'Torne o dia do seu pequeno herói inesquecível com a incrível armadura do cavaleiro medieval futurista de Gotham. Possui preenchimento muscular macio e flexível que garante o visual imponente mas mantém total flexibilidade para as brincadeiras mais agitadas.',
        price: 95.00,
        sizes: ['M (5-6 anos)', 'G (7-8 anos)', 'GG (9-10 anos)'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaK7Mri916lcB2_SGHTmRVFqUSlDoeqd-AS_njeQGUElV2TEJ1ysiOyCsjvPVVyjW4N5-ZlpFqSYp_4gh2c_cA0uaZq_ciXL6micIUS3JQQivC1xg3g5Sw6sb45RGhy8nhNiQTF7wglyR87KlfsfNYP5f4Yo0n7xeJGeQV08nyUxokVMF5FPJg5d_zQpIZqH9ePSqU8zGm36fLXUiQ37aN0CHvd4BP5jcUKXmYXMRba8BYj1LxKeWE3E85NRvhjnsfMK3Xm_1lNg',
        status: 'Disponível',
        accessories: ['Máscara Anatômica Confortável', 'Capa Integrada com Corte em Flecha', 'Cinto de Utilidades Ajustável de Alta Densidade'],
        material: 'Elastano Premium, Poliéster Antitranspirante e Espuma Expandida',
        careInstructions: 'Limpeza a seco especializada e higienização antibacteriana profunda.'
    },
    {
        id: 'safari',
        name: 'Aventura Safári',
        category: 'Aventura',
        description: 'Explore a selva selvagem.',
        fullDescription: 'Para os pequenos descobridores e naturalistas que amam desbravar novos caminhos. Uma farda completa, resistente e fresca, ideal para festas ao ar livre e pique-niques temáticos. Cada bolso é funcional para guardar pequenas relíquias.',
        price: 110.00,
        sizes: ['P (3-4 anos)', 'M (5-6 anos)'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRVx499bcmRcBcYaJz9ITk9s1Qag3zeXipXsSyTLf641nZmE2Qs5Jb95NrvDYxq4z2Eug8u3EChRikz_DNaAI8BtFRtWh11gt-NYFnRVi_cH-qY4gCDPmibugx9frcfmllPeb6l3oehyPBiEHMNZFDntlD45rtmh4HhZUTDpYnHD6FT9bet5BGGcxxTrgwxC-fJ7f4JrU_yXgdJfvwZfuAInXlp2GJIlULziGTwIvhqh9r0YcGhTgfUMm3ob3YVMRs11qEm_s2SA',
        status: 'Limitado',
        accessories: ['Chapéu Safari Flexível contra Sol', 'Binóculo Infantil Simulador', 'Mochila de Lona Térmica', 'Meias Cano Longo Listradas'],
        material: 'Brim Leve 100% Algodão, ideal para a pele sensível das crianças',
        careInstructions: 'Lavagem com sabão de coco ecológico, passada a vapor de alta pressão.'
    },
    {
        id: 'unicornio',
        name: 'Mundo Unicórnio',
        category: 'Fantasia',
        description: 'Cores, brilho e muita fantasia.',
        fullDescription: 'Um vestido arco-íris de conto de fadas que desperta sorrisos por onde passa. Feito com camadas volumosas e fluidas de tule macio que brilham sutilmente. Acompanha uma cauda super fofinha que adiciona o charme extra de unicórnio majestoso.',
        price: 130.00,
        sizes: ['P (3-4 anos)', 'M (5-6 anos)', 'G (7-8 anos)', 'GG (9-10 anos)'],
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKOKscZVfpHfzSp0wNVIERAWxqFN7IjiHxGsxOgqwAxIQ8PA1TQ57ZbevTF7xYlxbPHoMF4-Nxc3xJ4U1r0LdxKrpVKJMEnnVI1VUKt5WhtJpwTWS9NShiC5P-eJoxWWmDHp9gMflL4I7iyrqveQvWU2hD4l-TELGOlJ3z45CyYVYKqTT5VgHPhEPfMtsm4d0bq5Gu3-zCB84AMOpBSnx-hkSd2E1MHDNXpOJ_Ex4cn0EgPApdq6_8jb6ygpcamKK_pZWx2AqUig',
        status: 'Disponível',
        accessories: ['Tiara Floral com Chifre Macio e Brilho', 'Cauda de Unicórnio de Pelúcia Colorida', 'Asas Holográficas Tridimensionais'],
        material: 'Tule Premium Furta-cor, Forro de Popeline de Algodão',
        careInstructions: 'Higienização ultra delicada para preservar texturas, brilho e costuras decorativas.'
    }
];

const SOLICITACOES_INICIAIS = [
    {
        id: 'INQ-4821',
        name: 'Mariana Mendonça',
        whatsapp: '(11) 98765-4321',
        date: '2026-06-15',
        combo: 'Combo Completo: Kit Decoração + Fantasia',
        costumeId: 'congelante',
        costumeName: 'Aventura Congelante',
        status: 'Pendente',
        notes: 'Gostaria de saber se a fantasia Aventura Congelante tamanho M está disponível para o final de semana do dia 15 de Junho.'
    },
    {
        id: 'INQ-9281',
        name: 'Roberto Camargo',
        whatsapp: '(11) 99912-3211',
        date: '2026-07-04',
        combo: 'Apenas Aluguel de Fantasias Temáticas',
        costumeId: 'safari',
        costumeName: 'Aventura Safári',
        status: 'Aprovado',
        notes: 'Olá, pretendo fazer o aniversário do meu filho com tema safari. Vocês conseguem alugar para o dia 04 de julho junto com acessórios?'
    }
];

function inicializarBanco() {
    if (!localStorage.getItem('fantasytoca_costumes')) {
        localStorage.setItem('fantasytoca_costumes', JSON.stringify(TEMAS_INICIAIS));
    }
    if (!localStorage.getItem('fantasytoca_inquiries')) {
        localStorage.setItem('fantasytoca_inquiries', JSON.stringify(SOLICITACOES_INICIAIS));
    }
}
inicializarBanco();

function obterCostumes() {
    return JSON.parse(localStorage.getItem('fantasytoca_costumes')) || [];
}

function salvarCostumes(lista) {
    localStorage.setItem('fantasytoca_costumes', JSON.stringify(lista));
}

function obterInquiries() {
    return JSON.parse(localStorage.getItem('fantasytoca_inquiries')) || [];
}

function salvarInquiries(lista) {
    localStorage.setItem('fantasytoca_inquiries', JSON.stringify(lista));
}

// Assistente utilitário para resolver imagens dentro da pasta "imagens/", lidando com nomes simples de arquivos (ex: "Aranha.png") e caminhos absolutos ou copiados
function obterImagemUrl(url) {
    if (!url) return '';
    
    // Se for uma URL web completa ou formato base64, retorna imediatamente como está
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
        return url;
    }
    
    // Normaliza barras invertidas e barras invertidas duplas para barras convencionais
    let normalized = url.replace(/\\+/g, '/');
    // Remove barras duplicadas, caso existam (ex: "imagens//Aranha.png" -> "imagens/Aranha.png")
    normalized = normalized.replace(/\/+/g, '/');
    
    // Verifica se o caminho em letras minúsculas contém "imagens/"
    const lower = normalized.toLowerCase();
    const indexImagens = lower.lastIndexOf('imagens/');
    
    if (indexImagens !== -1) {
        // Se contiver "imagens/", extrai tudo a partir de "imagens/" em diante
        normalized = normalized.substring(indexImagens);
    } else {
        // Se NÃO contiver "imagens/", pode ser apenas o nome do arquivo ou um caminho em outra estrutura.
        // Obtemos apenas o nome do arquivo em si (o último segmento do caminho)
        const lastSlash = normalized.lastIndexOf('/');
        if (lastSlash !== -1) {
            normalized = normalized.substring(lastSlash + 1);
        }
        // Em seguida, adiciona o prefixo da pasta 'imagens/'
        normalized = 'imagens/' + normalized;
    }
    
    // Desfaz quaisquer elementos duplicados acidentalmente e limpa espaços extras
    normalized = normalized.trim();
    
    // Verificação inteligente de extensão: se não especificou uma extensão, assume automaticamente .png
    const lastSlashPos = normalized.lastIndexOf('/');
    const filenameSegment = lastSlashPos !== -1 ? normalized.substring(lastSlashPos + 1) : normalized;
    if (!filenameSegment.includes('.')) {
        normalized = normalized + '.png';
    }
    
    return normalized;
}

// Motor Gráfico de Backup Dinâmico para lidar perfeitamente com arquivos de imagem ausentes, corrompidos ou vazios (0-bytes)
window.tratarErroImagem = function(img) {
    if (!img) return;
    if (img.getAttribute('data-error-handled') === 'true') return;
    img.setAttribute('data-error-handled', 'true');
    
    // Recupera o nome da fantasia
    const name = img.alt || 'Fantasia Acervo';
    
    // Gera um código hash simples baseado no nome para rotacionar as elegantes cores dos temas
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Associações de cores de luxo
    const colorCombinations = [
        { bg: '#0b0f19', accent: '#f8fafc', badge: 'DE LUXO', textAccent: '#38bdf8' }, // slate escuro / azul céu
        { bg: '#111827', accent: '#f9fafb', badge: 'PREMIUM', textAccent: '#f43f5e' }, // carvão escuro / rosa
        { bg: '#030712', accent: '#f3f4f6', badge: 'MÁGICA', textAccent: '#a855f7' }, // preto puro / roxo
        { bg: '#18181b', accent: '#f4f4f5', badge: 'PRINCIPAL', textAccent: '#f59e0b' }, // zinco escuro / laranja-ouro
        { bg: '#0c0a09', accent: '#f5f5f4', badge: 'ESPECIAL', textAccent: '#10b981' }  // pedra / esmeralda
    ];
    
    const combo = colorCombinations[Math.abs(hash) % colorCombinations.length];
    
    const svgCode = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <defs>
            <linearGradient id="grad-${Math.abs(hash)}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:${combo.bg};stop-opacity:1" />
                <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
            </linearGradient>
            <style>
                .badge-text { font-family: system-ui, sans-serif; font-size: 10px; font-weight: 800; letter-spacing: 2px; }
                .title-text { font-family: system-ui, -apple-system, sans-serif; font-size: 18px; font-weight: 800; letter-spacing: -0.5px; }
                .brand-text { font-family: system-ui, sans-serif; font-size: 9px; font-weight: 600; letter-spacing: 1.5px; }
            </style>
        </defs>
        
        <!-- Fundo em Gradiente -->
        <rect width="100%" height="100%" fill="url(#grad-${Math.abs(hash)})"/>
        
        <!-- Traçados Artísticos e Arcos -->
        <circle cx="200" cy="150" r="140" fill="none" stroke="${combo.textAccent}" stroke-width="1" opacity="0.15" />
        <circle cx="200" cy="150" r="110" fill="none" stroke="${combo.accent}" stroke-width="1" stroke-dasharray="4 4" opacity="0.2" />
        
        <!-- Pequenos elementos estelares de fundo -->
        <g fill="#ffffff" opacity="0.4">
            <path d="M50,40 L52,44 L56,45 L52,46 L50,50 L48,46 L44,45 L48,44 Z" fill="${combo.textAccent}" />
            <path d="M350,220 L351.5,225 L356,226 L351.5,227 L350,232 L348.5,227 L344,226 L348.5,225 Z" fill="#ffffff" />
            <path d="M120,250 L121,253 L124,254 L121,255 L120,258 L119,255 L116,254 L119,253 Z" fill="#ffffff" opacity="0.6" />
            <path d="M280,60 L281,63 L284,64 L281,65 L280,68 L279,65 L276,64 L279,63 Z" fill="${combo.textAccent}" opacity="0.8" />
        </g>

        <!-- Elemento central gráfico de coroa estelar dinâmica -->
        <g transform="translate(200, 115) scale(1.45)">
            <path d="M-15,-20 Q0,-20 0,-35 Q0,-20 15,-20 Q0,-20 0,-5 Q0,-20 -15,-20 Z" fill="#facc15" />
            <path d="M-30,5 H30 M0,-25 V35" stroke="${combo.accent}" stroke-width="1.5" opacity="0.25" />
            <circle cx="0" cy="5" r="18" fill="none" stroke="${combo.accent}" stroke-width="2" opacity="0.4" />
            <path d="M-8,14 Q0,10 8,14" fill="none" stroke="${combo.accent}" stroke-width="2.5" stroke-linecap="round" />
            <circle cx="-6" cy="1" r="2.5" fill="${combo.accent}" />
            <circle cx="6" cy="1" r="2.5" fill="${combo.accent}" />
        </g>

        <!-- Elementos de texto dinâmicos -->
        <g text-anchor="middle">
            <!-- Emblema de Classificação (ex: LUXO, PREMIUM) -->
            <rect x="130" y="200" width="140" height="22" rx="11" fill="${combo.textAccent}" fill-opacity="0.15" stroke="${combo.textAccent}" stroke-width="1" stroke-opacity="0.3" />
            <text x="200" y="214" fill="${combo.textAccent}" class="badge-text" text-anchor="middle" text-transform="uppercase">${combo.badge}</text>
            
            <!-- Título do Item -->
            <text x="200" y="250" fill="${combo.accent}" class="title-text" text-anchor="middle">${escapeXml(name)}</text>
            <!-- Rodapé / Identidade Visual Coesiva -->
            <text x="200" y="272" fill="#94a3b8" class="brand-text" text-anchor="middle" opacity="0.8">FANTASYTOCA ACERVO</text>
        </g>
    </svg>
    `;

    function escapeXml(unsafe) {
        return unsafe.replace(/[<>&'"]/g, function (c) {
            switch (c) {
                case '<': return '&lt;';
                case '>': return '&gt;';
                case '&': return '&amp;';
                case '\'': return '&apos;';
                case '"': return '&quot;';
            }
        });
    }

    img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgCode.trim());
};

// Processa quaisquer imagens carregadas inicialmente que falharam antes do script terminar de carregar
(function() {
    try {
        const pendingImages = document.querySelectorAll('img[data-fallback-pending="true"]');
        pendingImages.forEach(img => {
            img.removeAttribute('data-fallback-pending');
            window.tratarErroImagem(img);
        });
    } catch (e) {
        console.warn('Erro ao aplicar imagens alternativas adiadas:', e);
    }
})();

document.addEventListener("DOMContentLoaded", function() {

    function mostrarToast(mensagem) {
        const toast = document.getElementById("toast-aviso");
        const texto = document.getElementById("toast-mensagem");
        if (toast && texto) {
            texto.textContent = mensagem;
            toast.style.display = "flex";
            toast.classList.remove("opacity-0", "-translate-y-6");
            toast.classList.add("opacity-100", "translate-y-0");
            setTimeout(() => {
                toast.classList.remove("opacity-100", "translate-y-0");
                toast.classList.add("opacity-0", "-translate-y-6");
                setTimeout(() => { toast.style.display = "none"; }, 300);
            }, 3000);
        }
    }

    /* =================================================================
       1. CONTROLE DA PÁGINA INICIAL (INDEX.HTML) - CATÁLOGO E FILTRAGEM
       ================================================================= */
    const gridTemas = document.getElementById("grid-temas");
    if (gridTemas) {
        let filtroCategoria = "Todos";
        let buscaTexto = "";
        let criterioOrdenacao = "default";
        
        const modal = document.getElementById("detalhes-modal");
        const fecharModalBtn = document.getElementById("fechar-modal-btn");
        const backdropClose = document.getElementById("modal-backdrop-close");
        
        const modalImg = document.getElementById("modal-img");
        const modalCategoria = document.getElementById("modal-categoria");
        const modalTitulo = document.getElementById("modal-titulo");
        const modalDescricao = document.getElementById("modal-descricao");
        const modalPreco = document.getElementById("modal-preco");
        const modalStatus = document.getElementById("modal-status");
        const modalStatusDot = document.getElementById("modal-status-dot");
        
        const tamanhosContainer = document.getElementById("tamanhos-container");
        const modalAcessorios = document.getElementById("modal-acessorios");
        const modalMaterial = document.getElementById("modal-material");
        const modalAlugarBtn = document.getElementById("modal-alugar-btn");
        
        let fantasiaSelecionadaModal = null;
        let tamanhoSelecionadoModal = "";

        function renderizarCatalogo() {
            gridTemas.innerHTML = "";
            const todosCostumes = obterCostumes();
            
            let filtrados = todosCostumes.filter(item => {
                const bateCategoria = (filtroCategoria === "Todos" || item.category === filtroCategoria);
                const bateTexto = item.name.toLowerCase().includes(buscaTexto.toLowerCase()) || 
                                  item.description.toLowerCase().includes(buscaTexto.toLowerCase()) ||
                                  item.category.toLowerCase().includes(buscaTexto.toLowerCase());
                return bateCategoria && bateTexto;
            });
            
            if (criterioOrdenacao === "preco-asc") {
                filtrados.sort((a, b) => a.price - b.price);
            } else if (criterioOrdenacao === "preco-desc") {
                filtrados.sort((a, b) => b.price - a.price);
            }
            
            if (filtrados.length === 0) {
                gridTemas.innerHTML = `
                    <div class="col-span-full py-16 text-center text-gray-500 bg-white rounded-2xl border border-gray-100 p-8 space-y-2">
                        <i data-lucide="compass-off" class="w-8 h-8 text-rose-500 mx-auto opacity-75"></i>
                        <p class="font-bold text-sm leading-relaxed text-gray-800">Nenhum tema encontrado com o termo informado.</p>
                        <p class="text-xs">Tente buscar outra palavra-chave ou escolha outra categoria acima.</p>
                    </div>
                `;
                lucide.createIcons();
                return;
            }
            
            filtrados.forEach(item => {
                const card = document.createElement("div");
                card.className = "bg-white rounded-xl overflow-hidden border border-black shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between";
                card.id = `costume-card-${item.id}`;
                
                let dotColor = 'bg-rose-500';
                if (item.status === 'Disponível') dotColor = 'bg-emerald-400';
                else if (item.status === 'Limitado') dotColor = 'bg-amber-400';
                
                card.innerHTML = `
                  <div class="h-56 overflow-hidden relative bg-gray-50 shrink-0 border-b border-gray-100">
                    <img src="${obterImagemUrl(item.image)}" alt="${item.name}" onerror="tratarErroImagem(this)" referrerpolicy="no-referrer" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-semibold text-gray-700 flex items-center gap-1.5 shadow-sm">
                      <span class="w-1.5 h-1.5 rounded-full ${dotColor}"></span>
                      <span>${item.status}</span>
                    </div>
                    <div class="absolute bottom-3 left-3 bg-black text-white font-bold text-[11px] px-2.5 py-1.5 rounded-lg shadow-sm">
                      R$ ${item.price.toFixed(2)} / diária
                    </div>
                  </div>
                  <div class="p-5 flex-1 flex flex-col justify-between text-left">
                    <div>
                      <span class="inline-block bg-gray-100 text-gray-800 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-lg mb-2">
                        ${item.category}
                      </span>
                      <h3 class="font-display font-extrabold text-base text-black mb-1 group-hover:text-black transition-colors">
                        ${item.name}
                      </h3>
                      <p class="text-xs text-gray-500 line-clamp-2 h-10 mb-4 leading-relaxed">
                        ${item.description}
                      </p>
                    </div>
                    <button type="button" class="w-full bg-white text-black border-2 border-black hover:bg-gray-50 font-bold text-xs py-2.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 botao-detalhes-card cursor-pointer" data-id="${item.id}">
                      <span>Ver Detalhes do Tema</span>
                    </button>
                  </div>
                `;
                gridTemas.appendChild(card);
            });
            
            document.querySelectorAll(".botao-detalhes-card").forEach(botao => {
                botao.addEventListener("click", function() {
                    const itemId = this.getAttribute("data-id");
                    abrirModalDetalhes(itemId);
                });
            });
        }

        function abrirModalDetalhes(id) {
            const costumes = obterCostumes();
            const item = costumes.find(c => c.id === id);
            
            if (item) {
                fantasiaSelecionadaModal = item;
                tamanhoSelecionadoModal = item.sizes[0] || 'Unico';
                
                if (modalImg) {
                    modalImg.removeAttribute('data-error-handled');
                    modalImg.alt = item.name;
                    modalImg.src = obterImagemUrl(item.image);
                }
                modalCategoria.textContent = item.category;
                modalTitulo.textContent = item.name;
                modalDescricao.textContent = item.fullDescription || item.description;
                modalPreco.textContent = `R$ ${item.price.toFixed(2)}`;
                modalStatus.textContent = item.status;
                
                if (modalStatusDot) {
                    modalStatusDot.className = "w-2.5 h-2.5 rounded-full";
                    if (item.status === 'Disponível') modalStatusDot.classList.add('bg-emerald-400');
                    else if (item.status === 'Limitado') modalStatusDot.classList.add('bg-amber-400');
                    else modalStatusDot.classList.add('bg-rose-500');
                }
                
                // Popula Acessórios e Materiais
                if (modalAcessorios) {
                    modalAcessorios.innerHTML = "";
                    const list = item.accessories || ['Múltiplos Acessórios Detalhados', 'Capa do Personagem Inclusa'];
                    list.forEach(acc => {
                        const li = document.createElement("li");
                        li.className = "flex items-start gap-2 text-xs text-gray-500 font-medium";
                        li.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0"></i> <span>${acc}</span>`;
                        modalAcessorios.appendChild(li);
                    });
                }
                
                if (modalMaterial) {
                    modalMaterial.textContent = item.material || 'Algodão Nobre e Antialérgico';
                }
                
                // Gerar botões de tamanhos com comportamento retroativo em Tailwind CSS
                tamanhosContainer.innerHTML = "";
                item.sizes.forEach((tam, idx) => {
                    const btn = document.createElement("button");
                    btn.type = "button";
                    btn.className = "tamanho-btn " + (idx === 0 ? "active" : "");
                    btn.textContent = tam;
                    btn.setAttribute("data-tam", tam);
                    btn.addEventListener("click", function() {
                        document.querySelectorAll("#tamanhos-container .tamanho-btn").forEach(b => b.classList.remove("active"));
                        this.classList.add("active");
                        tamanhoSelecionadoModal = this.getAttribute("data-tam");
                    });
                    tamanhosContainer.appendChild(btn);
                });
                
                if (item.status === "Esgotado") {
                    modalAlugarBtn.disabled = true;
                    modalAlugarBtn.innerHTML = `<span>Tema Indisponível</span>`;
                    modalAlugarBtn.className = "w-full bg-slate-200 text-gray-400 font-semibold py-3.5 rounded-xl cursor-not-allowed flex items-center justify-center gap-2";
                } else {
                    modalAlugarBtn.disabled = false;
                    modalAlugarBtn.innerHTML = `<i class="w-4 h-4" data-lucide="shopping-bag"></i><span>Escolher e Solicitar Orçamento</span>`;
                    modalAlugarBtn.className = "w-full bg-black hover:bg-neutral-800 text-white font-semibold py-3.5 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm cursor-pointer";
                }
                
                modal.style.display = "flex";
                document.body.style.overflow = "hidden";
                lucide.createIcons();
            }
        }

        function fecharModal() {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }

        if (fecharModalBtn) fecharModalBtn.addEventListener("click", fecharModal);
        if (backdropClose) backdropClose.addEventListener("click", fecharModal);
        
        window.addEventListener("click", function(e) {
            if (e.target === modal) {
                fecharModal();
            }
        });

        if (modalAlugarBtn) {
            modalAlugarBtn.addEventListener("click", function() {
                if (fantasiaSelecionadaModal && !modalAlugarBtn.disabled) {
                    const urlDestino = `contato.html?tema=${encodeURIComponent(fantasiaSelecionadaModal.id)}&tamanho=${encodeURIComponent(tamanhoSelecionadoModal)}`;
                    window.location.href = urlDestino;
                }
            });
        }

        // Filtros de Categoria (Interação elegante e rápida em Tailwind)
        document.querySelectorAll(".categoria-btn").forEach(btn => {
            btn.addEventListener("click", function() {
                document.querySelectorAll(".categoria-btn").forEach(b => {
                    b.className = "categoria-btn px-4 py-1.5 rounded-lg text-xs font-bold transition-all bg-white hover:bg-gray-100 text-gray-650 border border-gray-200 cursor-pointer";
                });
                this.className = "categoria-btn px-4 py-1.5 rounded-lg text-xs font-bold transition-all bg-white text-black border-2 border-black shadow-sm cursor-pointer";
                
                filtroCategoria = this.getAttribute("data-categoria");
                renderizarCatalogo();
            });
        });

        const buscaInput = document.getElementById("busca-input");
        if (buscaInput) {
            buscaInput.addEventListener("input", function() {
                buscaTexto = this.value;
                renderizarCatalogo();
            });
        }

        const ordenarSelect = document.getElementById("ordenar-select");
        if (ordenarSelect) {
            ordenarSelect.addEventListener("change", function() {
                criterioOrdenacao = this.value;
                renderizarCatalogo();
            });
        }

        renderizarCatalogo();
    }


    /* =================================================================
       2. CONTROLE DA PÁGINA CONTATO (CONTATO.HTML) - ENVIO E INTEGRAÇÃO
       ================================================================= */
    const formContato = document.getElementById("form-contato");
    if (formContato) {
        
        const selecaoInfoBox = document.getElementById("selecao-info-box");
        const selecaoNome = document.getElementById("selecao-nome");
        const selecaoTamanho = document.getElementById("selecao-tamanho");
        const limparSelecaoBtn = document.getElementById("limpar-selecao-previa-btn");
        const grupoSelecaoFantasia = document.getElementById("grupo-selecao-fantasia");
        const fantasiaVinculo = document.getElementById("fantasia-vinculo");
        
        let idTemaPreSelected = "";
        let tamanhoPreSelected = "";

        function popularDropdownTemas() {
            if (fantasiaVinculo) {
                fantasiaVinculo.innerHTML = '<option value="">-- Quero escolher meu tema opcionalmente --</option>';
                const costumesList = obterCostumes();
                costumesList.forEach(item => {
                    const opt = document.createElement("option");
                    opt.value = item.id;
                    opt.textContent = `${item.name} (${item.category}) - R$ ${item.price.toFixed(2)}/dia`;
                    fantasiaVinculo.appendChild(opt);
                });
            }
        }
        popularDropdownTemas();

        function processarQueryString() {
            const urlParams = new URLSearchParams(window.location.search);
            const temaParam = urlParams.get('tema');
            const tamanhoParam = urlParams.get('tamanho');
            
            if (temaParam) {
                const costumes = obterCostumes();
                const item = costumes.find(c => c.id === temaParam);
                
                if (item) {
                    idTemaPreSelected = item.id;
                    tamanhoPreSelected = tamanhoParam || "M";
                    
                    if (selecaoNome) selecaoNome.textContent = item.name;
                    if (selecaoTamanho) selecaoTamanho.textContent = tamanhoPreSelected;
                    if (selecaoInfoBox) selecaoInfoBox.style.display = "flex";
                    
                    if (grupoSelecaoFantasia) {
                        grupoSelecaoFantasia.style.display = "none";
                    }
                }
            } else {
                if (selecaoInfoBox) selecaoInfoBox.style.display = "none";
                if (grupoSelecaoFantasia) {
                    grupoSelecaoFantasia.style.display = "block";
                }
            }
        }
        processarQueryString();

        if (limparSelecaoBtn) {
            limparSelecaoBtn.addEventListener("click", function() {
                idTemaPreSelected = "";
                tamanhoPreSelected = "";
                window.history.replaceState({}, document.title, window.location.pathname);
                processarQueryString();
            });
        }

        formContato.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const nomeStr = document.getElementById("nome").value.trim();
            const whatsappStr = document.getElementById("whatsapp").value.trim();
            const dataFestaStr = document.getElementById("data-festa").value;
            const comboStr = document.getElementById("combo").value;
            const observacaoStr = document.getElementById("observacao").value.trim();
            
            let finalCostumeId = "";
            let finalCostumeName = "Sem Traje Vinculado";
            let finalTamanho = tamanhoPreSelected || "Padrão";
            
            if (idTemaPreSelected) {
                const item = obterCostumes().find(c => c.id === idTemaPreSelected);
                if (item) {
                    finalCostumeId = item.id;
                    finalCostumeName = item.name;
                }
            } else if (fantasiaVinculo && fantasiaVinculo.value) {
                const item = obterCostumes().find(c => c.id === fantasiaVinculo.value);
                if (item) {
                    finalCostumeId = item.id;
                    finalCostumeName = item.name;
                }
            }
            
            const novoIdSeq = `INQ-${Math.floor(1000 + Math.random() * 9000)}`;
            
            const novaSolicitacao = {
                id: novoIdSeq,
                name: nomeStr,
                whatsapp: whatsappStr,
                date: dataFestaStr,
                combo: comboStr,
                costumeId: finalCostumeId,
                costumeName: finalCostumeName,
                status: 'Pendente',
                notes: observacaoStr
            };
            
            const propostasList = obterInquiries();
            propostasList.unshift(novaSolicitacao);
            salvarInquiries(propostasList);
            
            let msgZap = `Olá Fantasytoca! Meu nome é ${nomeStr}.\nGostaria de solicitar orçamento de aluguel para a data ${dataFestaStr}.\n\n`;
            msgZap += `* Serviço/Combo: ${comboStr}\n`;
            msgZap += `* Peça/Tema Acertado: ${finalCostumeName} (Tamanho: ${finalTamanho})\n`;
            if (observacaoStr) {
                msgZap += `* Detalhes Adicionais: ${observacaoStr}\n`;
            }
            msgZap += `\n*Código da Consulta: ${novoIdSeq}*`;
            
            alert(`Sua proposta (#${novoIdSeq}) foi enviada no banco de dados e salva com sucesso para a nossa equipe do FestaSys!\n\nAgora você será redirecionado para enviar a mensagem corporativa simulada no WhatsApp.`);
            
            window.open(`https://wa.me/5511999991234?text=${encodeURIComponent(msgZap)}`, '_blank');
            window.location.href = "index.html";
        });
    }


    /* =================================================================
       3. CONTROLE DA PÁGINA LOGIN (LOGIN.HTML) - SEGURANÇA STAFF GATE
       ================================================================= */
    const formLogin = document.getElementById("form-login");
    if (formLogin) {
        formLogin.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const usuarioVal = document.getElementById("usuario").value.trim();
            const senhaVal = document.getElementById("senha").value;
            
            if ((usuarioVal.toLowerCase() === "nome" && senhaVal === "senha") || (usuarioVal.toLowerCase() === "admin" && senhaVal === "12345")) {
                sessionStorage.setItem('fantasytoca_logged', 'true');
                alert(`Login Autorizado no FestaSys!\nBem-vindo(a) de volta à administração da Fantasytoca.`);
                window.location.href = "admin.html";
            } else {
                alert("Credenciais corporativas inválidas!\nDica de Teste: entre com o Nome 'nome' e Senha 'senha'.");
            }
        });
    }


    /* =================================================================
       4. CONTROLE DO PAINEL ADMINISTRATIVO (ADMIN.HTML) - BANCO DE DADOS CRUD
       ================================================================= */
    const tabFantasias = document.getElementById("tab-fantasias");
    const tabPropostas = document.getElementById("tab-propostas");
    
    if (tabFantasias && tabPropostas) {
        
        const secaoEstoque = document.getElementById("secao-estoque");
        const secaoPropostas = document.getElementById("secao-propostas");
        
        const tabelaFantasiasCorpo = document.getElementById("admin-tabela-fantasias-corpo");
        const tabelaPropostasCorpo = document.getElementById("admin-tabela-propostas-corpo");
        
        const statTotalFantasias = document.getElementById("stat-total-fantasias");
        const statPropostasPendentes = document.getElementById("stat-propostas-pendentes");
        const statPropostasTotais = document.getElementById("stat-propostas-totais");
        
        const formCadastroEstoque = document.getElementById("form-cadastro-estoque");
        const formCadastroTitulo = document.getElementById("form-cadastro-titulo");
        const salvarCadastroBtn = document.getElementById("salvar-cadastro-btn");
        const limparFormularioBtn = document.getElementById("limpar-formulario-btn");
        
        const inputId = document.getElementById("cadastro-id");
        const inputNome = document.getElementById("cadastro-nome");
        const inputCategoria = document.getElementById("cadastro-categoria");
        const inputPreco = document.getElementById("cadastro-preco");
        const inputTamanho = document.getElementById("cadastro-tamanho");
        const inputStatus = document.getElementById("cadastro-status");
        const inputImagem = document.getElementById("cadastro-imagem");
        const inputDescricao = document.getElementById("cadastro-descricao");
        
        // Controladores de área interativa para arrastar e soltar (Drop Zone)
        const dropzone = document.getElementById("cadastro-imagem-dropzone");
        const fileInput = document.getElementById("cadastro-imagem-file");
        
        const dropzoneIdle = document.getElementById("dropzone-idle-state");
        const dropzoneLoading = document.getElementById("dropzone-loading-state");
        const dropzoneLoaded = document.getElementById("dropzone-loaded-state");
        const dropzonePreviewImg = document.getElementById("dropzone-preview-img");
        const dropzoneFilename = document.getElementById("dropzone-preview-filename");
        const dropzoneRemoveBtn = document.getElementById("dropzone-remove-btn");
        
        const toggleManualBtn = document.getElementById("dropzone-toggle-manual-btn");
        const manualContainer = document.getElementById("dropzone-manual-container");
        const inputManual = document.getElementById("cadastro-imagem-manual");

        function atualizarPrevisualizacaoImagem() {
            if (!inputImagem) return;
            const val = inputImagem.value.trim();
            
            // Sincroniza o elemento de entrada manual se estiver visível ou em uso
            if (inputManual && inputManual.value !== val) {
                inputManual.value = val;
            }

            if (!val) {
                if (dropzoneIdle) dropzoneIdle.classList.remove("hidden");
                if (dropzoneLoading) dropzoneLoading.classList.add("hidden");
                if (dropzoneLoaded) dropzoneLoaded.classList.add("hidden");
                return;
            }

            if (dropzoneIdle) dropzoneIdle.classList.add("hidden");
            if (dropzoneLoading) dropzoneLoading.classList.add("hidden");
            if (dropzoneLoaded) {
                dropzoneLoaded.classList.remove("hidden");
                if (dropzonePreviewImg) {
                    dropzonePreviewImg.removeAttribute('data-error-handled');
                    dropzonePreviewImg.alt = inputNome ? inputNome.value.trim() || 'Fantasia' : 'Fantasia';
                    dropzonePreviewImg.src = obterImagemUrl(val);
                }
                if (dropzoneFilename) {
                    if (val.startsWith("data:")) {
                        dropzoneFilename.textContent = "Imagem Importada / Upload";
                    } else {
                        dropzoneFilename.textContent = val;
                    }
                }
            }
        }

        function processarArquivoImagem(file) {
            if (!file) return;

            // Exibe o estado do indicador de progresso (spinner) de validação
            if (dropzoneIdle) dropzoneIdle.classList.add("hidden");
            if (dropzoneLoaded) dropzoneLoaded.classList.add("hidden");
            if (dropzoneLoading) dropzoneLoading.classList.remove("hidden");

            // Verificações de validação de formato
            const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
            const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
            const allowedExtensions = ['.png', '.jpg', '.jpeg', '.webp'];

            const hasValidType = allowedTypes.includes(file.type);
            const hasValidExt = allowedExtensions.includes(fileExtension);

            // Simulação do progresso de validação para permitir que o usuário veja visualmente o indicador premium
            setTimeout(() => {
                if (!hasValidType && !hasValidExt) {
                    mostrarToast("⚠️ Formato de imagem não suportado! Formatos recomendados: .png, .jpg, .jpeg, .webp");
                    atualizarPrevisualizacaoImagem();
                    return;
                }

                const reader = new FileReader();
                reader.onload = function(e) {
                    if (inputImagem) {
                        inputImagem.value = e.target.result;
                        atualizarPrevisualizacaoImagem();
                        mostrarToast("✅ Imagem de fantasia processada com sucesso!");
                    }
                };
                reader.onerror = function() {
                    mostrarToast("❌ Falha crítica ao ler o arquivo de imagem.");
                    atualizarPrevisualizacaoImagem();
                };
                reader.readAsDataURL(file);
            }, 800);
        }

        if (dropzone) {
            dropzone.addEventListener("click", function(e) {
                if (e.target.closest('#dropzone-remove-btn') || 
                    e.target.closest('input[type="file"]') || 
                    e.target.closest('#dropzone-toggle-manual-btn') || 
                    e.target.closest('#dropzone-manual-container')) {
                    return;
                }
                if (fileInput) fileInput.click();
            });

            if (fileInput) {
                fileInput.addEventListener("change", function(e) {
                    if (e.target.files && e.target.files[0]) {
                        processarArquivoImagem(e.target.files[0]);
                    }
                });
            }

            // Transições de arrastar por cima (drag over)
            dropzone.addEventListener("dragover", function(e) {
                e.preventDefault();
                dropzone.classList.remove("border-gray-200", "bg-gray-50");
                dropzone.classList.add("border-black", "bg-white", "scale-[1.012]");
            });

            dropzone.addEventListener("dragleave", function(e) {
                e.preventDefault();
                dropzone.classList.remove("border-black", "bg-white", "scale-[1.012]");
                dropzone.classList.add("border-gray-200", "bg-gray-50");
            });

            dropzone.addEventListener("drop", function(e) {
                e.preventDefault();
                dropzone.classList.remove("border-black", "bg-white", "scale-[1.012]");
                dropzone.classList.add("border-gray-200", "bg-gray-50");

                if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
                    processarArquivoImagem(e.dataTransfer.files[0]);
                }
            });
        }

        if (dropzoneRemoveBtn) {
            dropzoneRemoveBtn.addEventListener("click", function(e) {
                e.stopPropagation();
                if (inputImagem) inputImagem.value = "";
                if (fileInput) fileInput.value = "";
                if (inputManual) inputManual.value = "";
                atualizarPrevisualizacaoImagem();
                mostrarToast("Imagem removida do item");
            });
        }

        if (toggleManualBtn && manualContainer) {
            toggleManualBtn.addEventListener("click", function(e) {
                e.stopPropagation();
                if (manualContainer.classList.contains("hidden")) {
                    manualContainer.classList.remove("hidden");
                } else {
                    manualContainer.classList.add("hidden");
                }
            });
        }

        if (inputManual) {
            inputManual.addEventListener("input", function() {
                if (inputImagem) {
                    inputImagem.value = inputManual.value.trim();
                    atualizarPrevisualizacaoImagem();
                }
            });
            inputManual.addEventListener("blur", function() {
                const val = inputManual.value.trim();
                if (val && val.includes('.')) {
                    const extensionRegex = /\.(png|jpe?g|webp)(\?|#|$)/i;
                    if (!extensionRegex.test(val)) {
                        mostrarToast("⚠️ Formato de imagem não suportado! Formatos recomendados: .png, .jpg, .jpeg, .webp");
                    }
                }
            });
        }

        if (inputNome) {
            inputNome.addEventListener("input", function() {
                if (dropzoneLoaded && !dropzoneLoaded.classList.contains("hidden")) {
                    atualizarPrevisualizacaoImagem();
                }
            });
        }
        
        const resetDbBtn = document.getElementById("reset-db-btn");
        const logoutBtn = document.getElementById("logout-btn");

        if (logoutBtn) {
            logoutBtn.addEventListener("click", function() {
                sessionStorage.removeItem('fantasytoca_logged');
                alert("Conexão encerrada com segurança!");
                window.location.href = "login.html";
            });
        }

        tabFantasias.addEventListener("click", function() {
            tabFantasias.className = "tab-btn px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 active";
            tabPropostas.className = "tab-btn px-5 py-2.5 rounded-xl text-xs font-bold text-gray-500 hover:text-black hover:bg-gray-100 transition-all flex items-center gap-1.5";
            secaoEstoque.style.display = "block";
            secaoPropostas.style.display = "none";
        });

        tabPropostas.addEventListener("click", function() {
            tabPropostas.className = "tab-btn px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 active";
            tabFantasias.className = "tab-btn px-5 py-2.5 rounded-xl text-xs font-bold text-gray-500 hover:text-black hover:bg-gray-100 transition-all flex items-center gap-1.5";
            secaoPropostas.style.display = "block";
            secaoEstoque.style.display = "none";
            renderizarPropostasAdmin();
        });

        function atualizarEstatisticasAdmin() {
            const costumesList = obterCostumes();
            const inquiriesList = obterInquiries();
            
            if (statTotalFantasias) statTotalFantasias.textContent = costumesList.length;
            if (statPropostasPendentes) statPropostasPendentes.textContent = inquiriesList.filter(i => i.status === 'Pendente').length;
            if (statPropostasTotais) statPropostasTotais.textContent = inquiriesList.length;
        }

        function renderizarEstoqueAdmin() {
            if (!tabelaFantasiasCorpo) return;
            tabelaFantasiasCorpo.innerHTML = "";
            const lista = obterCostumes();
            
            lista.forEach(item => {
                const row = document.createElement("tr");
                row.className = "hover:bg-slate-50 transition-colors";
                row.innerHTML = `
                    <td class="p-4 pl-6 font-bold text-gray-400">#${item.id}</td>
                    <td class="p-4">
                        <img src="${obterImagemUrl(item.image)}" alt="${item.name}" onerror="tratarErroImagem(this)" referrerpolicy="no-referrer" class="w-12 h-12 rounded-lg object-cover object-top border border-gray-100">
                    </td>
                    <td class="p-4">
                        <strong class="font-display font-bold text-sm text-gray-800 block">${item.name}</strong>
                        <span class="text-[10px] text-gray-400 block max-w-xs truncate">${item.description}</span>
                    </td>
                    <td class="p-4">
                        <span class="tag-categoria">${item.category}</span>
                    </td>
                    <td class="p-4 font-semibold text-gray-500">${item.sizes.join(", ")}</td>
                    <td class="p-4 font-bold text-emerald-600">R$ ${item.price.toFixed(2)}</td>
                    <td class="p-4">
                        <span class="status-badge-pequena status-${item.status.toLowerCase().replace(/í/g, 'i')}">${item.status}</span>
                    </td>
                    <td class="p-4 pr-6 text-center space-x-1 whitespace-nowrap">
                        <button class="bg-white hover:bg-neutral-50 text-black border border-black font-extrabold p-1.5 px-3 rounded text-[10px] transition-all btn-operacao-editar cursor-pointer" data-id="${item.id}">Editar</button>
                        <button class="bg-white hover:bg-red-50 text-rose-600 border border-black font-extrabold p-1.5 px-3 rounded text-[10px] transition-all btn-operacao-deletar cursor-pointer" data-id="${item.id}">Deletar</button>
                    </td>
                `;
                tabelaFantasiasCorpo.appendChild(row);
            });

            document.querySelectorAll(".btn-operacao-editar").forEach(btn => {
                btn.addEventListener("click", function() {
                    const idEdicao = this.getAttribute("data-id");
                    prepararEdicaoEstoque(idEdicao);
                });
            });

            document.querySelectorAll(".btn-operacao-deletar").forEach(btn => {
                btn.addEventListener("click", function() {
                    const idDelecao = this.getAttribute("data-id");
                    processarDelecaoEstoque(idDelecao);
                });
            });

            atualizarEstatisticasAdmin();
            lucide.createIcons();
        }

        function renderizarPropostasAdmin() {
            if (!tabelaPropostasCorpo) return;
            tabelaPropostasCorpo.innerHTML = "";
            const lista = obterInquiries();
            
            if (lista.length === 0) {
                tabelaPropostasCorpo.innerHTML = `
                    <tr>
                        <td colspan="8" class="text-center p-12 text-gray-500 bg-white">
                            <i data-lucide="inbox" class="w-8 h-8 text-gray-300 mx-auto mb-2"></i>
                            <p class="font-bold text-xs">Nenhuma solicitação de orçamento registrada.</p>
                        </td>
                    </tr>
                `;
                lucide.createIcons();
                return;
            }

            lista.forEach(inq => {
                const tr = document.createElement("tr");
                tr.className = "hover:bg-slate-50 transition-colors";
                
                const pendSelected = inq.status === 'Pendente' ? 'selected' : '';
                const aprovSelected = inq.status === 'Aprovado' ? 'selected' : '';
                const cancelSelected = inq.status === 'Cancelado' ? 'selected' : '';

                tr.innerHTML = `
                    <td class="p-4 pl-6 font-bold text-gray-800">${inq.id}</td>
                    <td class="p-4 font-bold text-gray-900">${inq.name}</td>
                    <td class="p-4 font-bold text-gray-500">${inq.whatsapp}</td>
                    <td class="p-4 text-gray-500 font-semibold">${inq.date}</td>
                    <td class="p-4"><span class="text-black font-bold text-xs">${inq.costumeName}</span></td>
                    <td class="p-4 text-[10px] text-gray-400 font-semibold max-w-xs truncate">${inq.combo}</td>
                    <td class="p-4">
                        <select class="select-status-registro border border-gray-200 rounded p-1 text-xs font-bold outline-none bg-white cursor-pointer" data-id="${inq.id}">
                            <option value="Pendente" ${pendSelected} class="text-amber-500">Pendente</option>
                            <option value="Aprovado" ${aprovSelected} class="text-emerald-500">Aprovado</option>
                            <option value="Cancelado" ${cancelSelected} class="text-rose-500">Cancelado</option>
                        </select>
                    </td>
                    <td class="p-4 pr-6 text-center">
                        <button class="bg-white hover:bg-red-50 text-red-650 border border-black font-extrabold p-1 px-3 rounded transition-all btn-deletar-proposta cursor-pointer" data-id="${inq.id}">X</button>
                    </td>
                `;
                tabelaPropostasCorpo.appendChild(tr);
            });

            document.querySelectorAll(".select-status-registro").forEach(sel => {
                sel.addEventListener("change", function() {
                    const inqId = this.getAttribute("data-id");
                    const novoEstado = this.value;
                    atualizarEstadoProposta(inqId, novoEstado);
                });
            });

            document.querySelectorAll(".btn-deletar-proposta").forEach(btn => {
                btn.addEventListener("click", function() {
                    const inqId = this.getAttribute("data-id");
                    excluirPropostaCliente(inqId);
                });
            });

            atualizarEstatisticasAdmin();
            lucide.createIcons();
        }

        function atualizarEstadoProposta(id, novoStatus) {
            const inqList = obterInquiries();
            const inq = inqList.find(i => i.id === id);
            if (inq) {
                inq.status = novoStatus;
                salvarInquiries(inqList);
                mostrarToast(`Status da consulta #${id} alterado para: ${novoStatus}`);
            }
        }

        function excluirPropostaCliente(id) {
            if (confirm(`Tem certeza que deseja apagar permanentemente a solicitação #${id}?`)) {
                const list = obterInquiries();
                const filtrados = list.filter(i => i.id !== id);
                salvarInquiries(filtrados);
                renderizarPropostasAdmin();
                mostrarToast(`Solicitação #${id} removida do banco.`);
            }
        }

        function prepararEdicaoEstoque(id) {
            const list = obterCostumes();
            const item = list.find(c => c.id === id);
            
            if (item) {
                inputId.value = item.id;
                inputNome.value = item.name;
                inputCategoria.value = item.category;
                inputPreco.value = item.price;
                inputTamanho.value = item.sizes.join(", ");
                inputStatus.value = item.status;
                inputImagem.value = item.image;
                inputDescricao.value = item.fullDescription || item.description;
                
                // Atualiza a pré-visualização ao vivo instantaneamente
                atualizarPrevisualizacaoImagem();
                
                formCadastroTitulo.textContent = `📝 Editar Fantasia (ID: #${item.id})`;
                salvarCadastroBtn.innerHTML = `<i data-lucide="save" class="w-4 h-4"></i> <span>Atualizar Cadastro do Item</span>`;
                lucide.createIcons();
                
                document.getElementById("bloco-form-cadastro").scrollIntoView({ behavior: 'smooth' });
                mostrarToast(`Preparando edição de: ${item.name}`);
            }
        }

        function redefinirFormCadastro() {
            formCadastroEstoque.reset();
            inputId.value = "";
            formCadastroTitulo.textContent = "➕ Cadastrar Nova Fantasia Infantil (Estoque)";
            salvarCadastroBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> <span>Salvar Item no Acervo</span>`;
            
            // Oculta o contêiner de pré-visualização ao redefinir
            if (previewContainer) {
                previewContainer.classList.add("hidden");
            }
            
            lucide.createIcons();
        }
        
        if (limparFormularioBtn) {
            limparFormularioBtn.addEventListener("click", redefinirFormCadastro);
        }

        if (formCadastroEstoque) {
            formCadastroEstoque.addEventListener("submit", function(e) {
                e.preventDefault();
                
                const idVal = inputId.value;
                const nomeVal = inputNome.value.trim();
                const categoriaVal = inputCategoria.value;
                const precoVal = parseFloat(inputPreco.value);
                const tamanhoArr = inputTamanho.value.split(",").map(t => t.trim()).filter(t => t !== "");
                const statusVal = inputStatus.value;
                const imagemVal = inputImagem.value.trim();
                const descVal = inputDescricao.value.trim();
                
                const costumesList = obterCostumes();
                
                if (idVal) {
                    const item = costumesList.find(c => c.id === idVal);
                    if (item) {
                        item.name = nomeVal;
                        item.category = categoriaVal;
                        item.price = precoVal;
                        item.sizes = tamanhoArr;
                        item.status = statusVal;
                        item.image = imagemVal;
                        item.description = descVal.substring(0, 60) + "...";
                        item.fullDescription = descVal;
                        
                        mostrarToast(`Peça "${nomeVal}" atualizada com sucesso!`);
                    }
                } else {
                    const novoId = `cos-${Date.now()}`;
                    const novoItem = {
                        id: novoId,
                        name: nomeVal,
                        category: categoriaVal,
                        description: descVal.substring(0, 60) + "...",
                        fullDescription: descVal,
                        price: precoVal,
                        sizes: tamanhoArr,
                        image: imagemVal,
                        status: statusVal,
                        accessories: ['Acessórios Detalhados Selecionados', 'Item de Cabeça Premium'],
                        material: 'Mistura Premium Resistente Antialérgica',
                        careInstructions: 'Higienização profissional por lavadora de alta pressão e estufa de secagem esterilizada.'
                    };
                    costumesList.unshift(novoItem);
                    mostrarToast(`Peça "${nomeVal}" cadastrada no estoque corporativo!`);
                }
                
                salvarCostumes(costumesList);
                redefinirFormCadastro();
                renderizarEstoqueAdmin();
            });
        }

        function processarDelecaoEstoque(id) {
            const list = obterCostumes();
            const item = list.find(c => c.id === id);
            
            if (item) {
                if (confirm(`Atenção: deseja dar baixa e remover do sistema permanentemente a fantasia "${item.name}" (ID #${id})?`)) {
                    const novaLista = list.filter(c => c.id !== id);
                    salvarCostumes(novaLista);
                    renderizarEstoqueAdmin();
                    mostrarToast("Item deletado e removido do inventário.");
                }
            }
        }

        if (resetDbBtn) {
            resetDbBtn.addEventListener("click", function() {
                if (confirm("Deseja apagar todas as propostas e retornar o estoque corporativo para as 4 fantasias de fábrica (Frozen, Batman, Safari, Unicórnio)?")) {
                    localStorage.removeItem('fantasytoca_costumes');
                    localStorage.removeItem('fantasytoca_inquiries');
                    inicializarBanco();
                    renderizarEstoqueAdmin();
                    redefinirFormCadastro();
                    
                    if (tabPropostas.classList.contains("active") || secaoPropostas.style.display === "block") {
                        renderizarPropostasAdmin();
                    }
                    
                    alert("Banco de dados restaurado aos padrões corporativos da Fantasytoca!");
                }
            });
        }

        renderizarEstoqueAdmin();
    }

});
