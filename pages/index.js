import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'


export default function Home() {

  // 問題集
  const [questions, setQuestions] = useState([
    {
      // 問題
      question: {
        text: 'TCP/IPネットワークでホスト名をIPアドレスに変換する機能を提供するものはどれか。',
        options: ['ARP', 'DHCP', 'DNS', 'SNMP'],
        answer: 3
      },
      // 回答
      answer: {
        value: null
      }
    },
    {
      question: {
        text: 'SOAを説明したものはどれか。',
        options: [
          '企業改革において既存の組織やビジネスルールを抜本的に見直し，業務フロー，管理機構，情報システムを再構築する手法のこと',
          '企業の経営資源を有効に活用して経営の効率を向上させるために，基幹業務を部門ごとでなく統合的に管理するための業務システムのこと',
          '発注者とITアウトソーシングサービス提供者との間で，サービスの品質について合意した文書のこと',
          'ビジネスプロセスの構成要素とそれを支援するIT基盤を，ソフトウェア部品であるサービスとして提供するシステムアーキテクチャのこと'
        ],
        answer: 4
      },
      answer: {
        value: null
      }
    }, {
      question: {
        text: '大量に蓄積されたデータから，ビジネスなどに有効な情報を統計学的手法などを用いて新たに見つけ出すプロセスはどれか。',
        options: [
          'データウェアハウス',
          'データディクショナリ',
          'データマイニング',
          'メタデータ'
        ],
        answer: 3
      },
      answer: {
        value: null
      }
    },
    {
      question: {
        text: 'システム全体のスループットを高めるために，主記憶装置と低速の出力装置とのデータ転送を，高速の補助記憶装置を介して行う方式はどれか。',
        options: [
          'スプーリング',
          'スワッピング',
          'ブロッキング',
          'ページング'
        ],
        answer: 1
      },
      answer: {
        value: null
      }
    },
    {
      question: {
        text: 'ソフトウェア開発プロジェクトで行う構成管理の対象項目として，適切なものはどれか',
        options: [
          '開発作業の進捗状況',
          '成果物に対するレビューの実施結果',
          'プログラムのバージョン',
          'プロジェクト組織の編成'
        ],
        answer: 3
      },
      answer: {
        value: null
      }
    }])

  // 回答中の問題の位置を持つ（問題自体を持ってもOK）
  const [index, setIndex] = React.useState(0)
  const [isLast, setIsLast] = React.useState(false)

  /**
   * 回答ボタン押下
   */
  const handleAnswer = (i) => {
    questions[index].answer.value = i - 1
    setQuestions(() => questions)
    setIndex(() => questions.length > (index + 1) ? index + 1 : index)
    setIsLast(() => questions.length == index + 1)
  }


  /**
   * 問題
   */
  const Question = ({ question }) => {
    const n = index + 1
    return (
      <>
        <h3>{question.title}</h3>
        <p><strong>第{n}問</strong>{question.text}</p>
        {question.options
          .map((x, i) =>
          (<button key={i} className={styles.answerButton} onClick={() => handleAnswer(i + 1)}>
            {(i + 1)}. {x}
          </button>))}
      </>)
  }

  const Answers = (props) => (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>No</th>
          {props.questions.map((x, index) => (
            <React.Fragment key={index}>
              <td>{index + 1}</td>
            </React.Fragment>
          ))}
        </tr>
        <tr>
          <th>回答</th>
          {props.questions.map((x, index) => (
            <React.Fragment key={index}>
              <td>{['ア', 'イ', 'ウ', 'エ'][x.answer.value]}</td>
            </React.Fragment>
          ))}
        </tr>
      </tbody>
    </table>
  )

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>模擬試験</h1>

        {/*　回答  */}
        <Question question={questions[index].question} />

        {/* 回答履歴 */}
        <Answers questions={questions} />

      </main>

      <footer className={styles.footer}>
        Copyright 2021 m_sawada
      </footer>
    </div >
  )
}
