import React, { useState, useEffect } from 'react';
import { Lock, Unlock, Target, Crosshair, Zap, Activity, Eye, Shield, Cpu } from 'lucide-react';

export default function AuxilioHS() {
  const [keyInput, setKeyInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInjecting, setIsInjecting] = useState(false);
  const [injectionProgress, setInjectionProgress] = useState(0);
  const [systemActive, setSystemActive] = useState(false);
  
  // Configurações do auxílio
  const [config, setConfig] = useState({
    aimbot: false,
    headshot: false,
    recoil: false,
    fov: 150,
    sensitivity: 100,
    aimSpeed: 85,
    smoothing: 50
  });

  const [stats, setStats] = useState({
    fps: 90,
    ping: 25,
    accuracy: 0,
    injected: false
  });

  const validKeys = ['OPT-1234-5678-9ABC', 'OPT-ABCD-EFGH-IJKL', 'DLQ-0987-6543-21FE'];

  // Sistema de injeção avançado
  const injectSystem = async () => {
    setIsInjecting(true);
    setInjectionProgress(0);

    const steps = [
      { text: '🔍 Procurando processo Free Fire...', delay: 500 },
      { text: '📂 Acessando com.dts.freefireth...', delay: 600 },
      { text: '🔓 Desbloqueando memória...', delay: 700 },
      { text: '💉 Injetando DLL principal...', delay: 800 },
      { text: '⚙️ Aplicando configurações de sensibilidade...', delay: 600 },
      { text: '🎯 Calibrando sistema de aimbot...', delay: 700 },
      { text: '🔫 Configurando headshot automático...', delay: 600 },
      { text: '📡 Sincronizando com servidor...', delay: 500 },
      { text: '✅ INJEÇÃO COMPLETA!', delay: 400 }
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, steps[i].delay));
      setInjectionProgress(((i + 1) / steps.length) * 100);
    }

    setIsInjecting(false);
    setSystemActive(true);
    setStats(prev => ({ ...prev, injected: true }));
  };

  useEffect(() => {
    if (systemActive) {
      const interval = setInterval(() => {
        setStats(prev => ({
          fps: Math.floor(Math.random() * 15 + 88),
          ping: Math.floor(Math.random() * 12 + 15),
          accuracy: config.aimbot ? Math.floor(Math.random() * 8 + 92) : Math.floor(Math.random() * 25 + 45),
          injected: true
        }));
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [systemActive, config.aimbot]);

  const checkKey = () => {
    if (validKeys.includes(keyInput.toUpperCase())) {
      setIsAuthenticated(true);
    } else {
      alert('❌ KEY INVÁLIDA!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-black/90 backdrop-blur-xl rounded-3xl p-8 border-4 border-red-600 shadow-2xl shadow-red-900/50">
          <div className="text-center mb-8">
            <div className="inline-block p-5 bg-gradient-to-br from-red-600 to-red-800 rounded-full mb-4 animate-pulse shadow-lg shadow-red-500/50">
              <Lock size={56} className="text-white" />
            </div>
            <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700 mb-3">
              AUXÍLIO HS
            </h1>
            <p className="text-gray-300 text-lg font-semibold">Sistema Premium de Injeção</p>
            <div className="mt-4 inline-flex items-center gap-2 bg-red-900/30 px-4 py-2 rounded-full border border-red-500/30">
              <Shield size={16} className="text-red-400" />
              <span className="text-red-400 text-sm font-bold">100% UNDETECTED</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-red-400 mb-2">
                🔑 DIGITE SUA KEY DE ACESSO
              </label>
              <input
                type="text"
                placeholder="OPT-XXXX-XXXX-XXXX"
                className="w-full px-4 py-4 bg-black/70 border-2 border-red-600 rounded-xl text-white text-center text-lg font-mono placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/30 transition-all"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value.toUpperCase())}
                maxLength={19}
              />
            </div>

            <button
              onClick={checkKey}
              className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white font-black py-5 rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-red-900/50 text-lg"
            >
              <Unlock className="inline mr-2" size={22} />
              DESBLOQUEAR SISTEMA
            </button>

            <div className="mt-6 p-5 bg-gradient-to-br from-black/70 to-green-900/20 rounded-xl border-2 border-green-500/30 shadow-lg">
              <p className="text-xs text-gray-400 text-center mb-3 font-bold uppercase tracking-wide">
                💡 Keys Válidas para Teste
              </p>
              <div className="space-y-2">
                {validKeys.map((key, i) => (
                  <div 
                    key={i} 
                    className="text-center bg-green-900/30 border-2 border-green-500/40 rounded-lg py-2.5 px-3 hover:bg-green-900/50 transition-all cursor-pointer"
                    onClick={() => setKeyInput(key)}
                  >
                    <span className="text-green-400 font-mono text-sm font-bold">{key}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950 p-4">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-2xl p-6 shadow-2xl border-2 border-red-500">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-black text-white mb-2 drop-shadow-lg">🎯 AUXÍLIO HS PRO</h1>
              <p className="text-red-100 font-semibold">KEY: <span className="font-mono">{keyInput}</span></p>
            </div>
            <div className="text-right">
              <div className={`inline-flex items-center gap-2 ${systemActive ? 'bg-green-500' : 'bg-yellow-500'} px-5 py-3 rounded-full shadow-lg`}>
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="text-white font-black text-sm">
                  {systemActive ? 'SISTEMA ATIVO' : 'AGUARDANDO INJEÇÃO'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botão de Injeção */}
      {!systemActive && (
        <div className="max-w-7xl mx-auto mb-6">
          <button
            onClick={injectSystem}
            disabled={isInjecting}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-black py-8 rounded-2xl transition-all transform hover:scale-105 shadow-2xl text-2xl disabled:cursor-not-allowed"
          >
            {isInjecting ? (
              <>
                <Cpu className="inline mr-3 animate-spin" size={32} />
                INJETANDO... {Math.floor(injectionProgress)}%
              </>
            ) : (
              <>
                💉 INJETAR NO FREE FIRE
              </>
            )}
          </button>
          
          {isInjecting && (
            <div className="mt-4 bg-black/50 rounded-xl p-4 border border-green-500/30">
              <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-600 h-full transition-all duration-300 flex items-center justify-center"
                  style={{width: `${injectionProgress}%`}}
                >
                  <span className="text-xs font-bold text-white">{Math.floor(injectionProgress)}%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Painel de Status */}
        <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-red-500/50 shadow-2xl">
          <h2 className="text-2xl font-black text-red-500 mb-6 flex items-center gap-2">
            <Activity size={28} />
            STATUS
          </h2>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-red-900/30 to-red-900/10 rounded-xl p-5 border border-red-500/30">
              <div className="text-gray-400 text-sm mb-2 font-semibold">FPS</div>
              <div className="text-4xl font-black text-green-400">{stats.fps}</div>
            </div>
            
            <div className="bg-gradient-to-br from-red-900/30 to-red-900/10 rounded-xl p-5 border border-red-500/30">
              <div className="text-gray-400 text-sm mb-2 font-semibold">PING</div>
              <div className="text-4xl font-black text-blue-400">{stats.ping}ms</div>
            </div>
            
            <div className="bg-gradient-to-br from-red-900/30 to-red-900/10 rounded-xl p-5 border border-red-500/30">
              <div className="text-gray-400 text-sm mb-2 font-semibold">PRECISÃO</div>
              <div className="text-4xl font-black text-yellow-400">{stats.accuracy}%</div>
            </div>

            <div className={`bg-gradient-to-br ${stats.injected ? 'from-green-900/30 to-green-900/10 border-green-500/30' : 'from-gray-900/30 to-gray-900/10 border-gray-500/30'} rounded-xl p-5 border`}>
              <div className="text-gray-400 text-sm mb-2 font-semibold">STATUS INJEÇÃO</div>
              <div className={`text-lg font-black ${stats.injected ? 'text-green-400' : 'text-gray-400'}`}>
                {stats.injected ? '✅ INJETADO' : '❌ NÃO INJETADO'}
              </div>
            </div>
          </div>
        </div>

        {/* Controles */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* AIMBOT */}
          <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-red-500/50 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-black text-red-500 flex items-center gap-3">
                <Target size={32} />
                AIMBOT AVANÇADO
              </h2>
              <button
                onClick={() => setConfig({...config, aimbot: !config.aimbot})}
                disabled={!systemActive}
                className={`px-8 py-4 rounded-xl font-black transition-all transform hover:scale-110 text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                  config.aimbot 
                    ? 'bg-green-600 text-white shadow-green-500/50 animate-pulse' 
                    : 'bg-gray-700 text-gray-300'
                }`}
              >
                {config.aimbot ? '✅ ATIVADO' : '❌ DESATIVADO'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-gray-300 font-bold">FOV (Campo de Visão)</span>
                  <span className="text-red-400 font-black text-lg">{config.fov}px</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="300"
                  value={config.fov}
                  onChange={(e) => setConfig({...config, fov: parseInt(e.target.value)})}
                  disabled={!systemActive}
                  className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600 disabled:opacity-50"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-gray-300 font-bold">Velocidade do Aim</span>
                  <span className="text-red-400 font-black text-lg">{config.aimSpeed}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={config.aimSpeed}
                  onChange={(e) => setConfig({...config, aimSpeed: parseInt(e.target.value)})}
                  disabled={!systemActive}
                  className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600 disabled:opacity-50"
                />
              </div>
            </div>

            <div className="flex items-center justify-center my-8">
              <div 
                className="border-4 border-dashed border-red-500 rounded-full flex items-center justify-center relative transition-all"
                style={{width: `${Math.min(config.fov, 250)}px`, height: `${Math.min(config.fov, 250)}px`}}
              >
                <Crosshair size={32} className="text-red-500 absolute" />
                {config.aimbot && systemActive && (
                  <>
                    <div className="absolute inset-0 border-4 border-green-500 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 border-2 border-green-400 rounded-full"></div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* HEADSHOT */}
          <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-red-500/50 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-black text-red-500 flex items-center gap-3">
                <Eye size={32} />
                HEADSHOT 100%
              </h2>
              <button
                onClick={() => setConfig({...config, headshot: !config.headshot})}
                disabled={!systemActive}
                className={`px-8 py-4 rounded-xl font-black transition-all transform hover:scale-110 text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                  config.headshot 
                    ? 'bg-green-600 text-white shadow-green-500/50 animate-pulse' 
                    : 'bg-gray-700 text-gray-300'
                }`}
              >
                {config.headshot ? '✅ ATIVADO' : '❌ DESATIVADO'}
              </button>
            </div>
            
            {config.headshot && systemActive && (
              <div className="bg-gradient-to-r from-green-900/30 to-green-900/10 border-2 border-green-500/50 rounded-xl p-6 animate-pulse">
                <p className="text-green-400 text-center font-black text-xl">
                  🎯 Sistema travando automaticamente na cabeça dos inimigos!
                </p>
                <p className="text-green-300 text-center mt-2 text-sm">
                  Injector Code: <code className="font-mono bg-black/50 px-2 py-1 rounded">com.dts.freefireth/sensitivity=true</code>
                </p>
              </div>
            )}
          </div>

          {/* CONTROLE DE RECUO */}
          <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-6 border-2 border-red-500/50 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-black text-red-500 flex items-center gap-3">
                <Zap size={32} />
                ANTI-RECOIL
              </h2>
              <button
                onClick={() => setConfig({...config, recoil: !config.recoil})}
                disabled={!systemActive}
                className={`px-8 py-4 rounded-xl font-black transition-all transform hover:scale-110 text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                  config.recoil 
                    ? 'bg-green-600 text-white shadow-green-500/50 animate-pulse' 
                    : 'bg-gray-700 text-gray-300'
                }`}
              >
                {config.recoil ? '✅ ATIVADO' : '❌ DESATIVADO'}
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-gray-300 font-bold">Sensibilidade</span>
                  <span className="text-red-400 font-black text-lg">{config.sensitivity}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={config.sensitivity}
                  onChange={(e) => setConfig({...config, sensitivity: parseInt(e.target.value)})}
                  disabled={!systemActive}
                  className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600 disabled:opacity-50"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <span className="text-gray-300 font-bold">Suavização</span>
                  <span className="text-red-400 font-black text-lg">{config.smoothing}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={config.smoothing}
                  onChange={(e) => setConfig({...config, smoothing: parseInt(e.target.value)})}
                  disabled={!systemActive}
                  className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600 disabled:opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Botão Final */}
          {systemActive && (
            <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-2xl p-8 shadow-2xl border-2 border-red-500">
              <button
                onClick={() => alert('🎮 Abrindo Free Fire com todas as configurações ativadas...')}
                className="w-full bg-black hover:bg-gray-900 text-white font-black py-8 rounded-2xl text-3xl transition-all transform hover:scale-105 shadow-2xl"
              >
                🚀 ABRIR FREE FIRE COM AUXÍLIO
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
                                                                                    }
